#!/bin/bash

set -e
set -u

function user_exists() {
		local user=$1

		result=$(psql -U "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_roles WHERE rolname = '${user}'")

		if [ -z "$result" ]; then
				return 1
		else
				return 0
		fi
}

function database_exists() {
		local database=$1

		result=$(psql -U "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname = '${database}'")

		if [ -z "$result" ]; then
				return 1
		else
				return 0
		fi
}

function create_user_and_database() {
		local database=$1

		echo ""
		echo "Creating '$database' database"
		echo ""

		if user_exists "$DB_USER"; then
				echo "Role '$DB_USER' already exists. Skipping..."
		else
				echo "Role '${DB_USER}' does not exist"

				psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" <<-EOSQL
					CREATE USER $DB_USER WITH PASSWORD '$POSTGRES_PASSWORD';
				EOSQL
		fi

		if database_exists "$database"; then
				echo "Database '$database' already exists. Skipping..."
		else
				echo "Database '${database}' does not exist"

				psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" <<-EOSQL
						CREATE DATABASE $database;
				EOSQL
		fi

		psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" <<-EOSQL
			GRANT SET ON PARAMETER session_replication_role TO $DB_USER;
			ALTER DATABASE $database OWNER TO $DB_USER;
		EOSQL

		echo "Successful database creation '$database'"
		echo ""
}

if [ -n "$DB_NAMES" ]; then
	for database in $(echo $DB_NAMES | tr ',' ' '); do
		create_user_and_database $database
	done
fi
