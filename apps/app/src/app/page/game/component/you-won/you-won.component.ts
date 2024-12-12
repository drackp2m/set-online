import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-you-won',
	template: `
		<div class="overlay flex-col gap-xxl">
			<h1>You won!</h1>

			<button class="surface-vivid p-sm round-md" (click)="playAgain.emit()">Play again</button>
		</div>
	`,
	styles: [
		`
			.overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background: red;
				background-color: #fff9;
				z-index: 80;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(10px);

				h1 {
					font-size: 60px;
					color: gold;
					text-shadow:
						0 1px #a40d0d,
						-1px 0 #dd4040,
						-1px 2px #a40d0d,
						-2px 1px #dd4040,
						-2px 3px #a40d0d,
						-3px 2px #dd4040,
						-3px 4px #a40d0d,
						-4px 3px #dd4040,
						-4px 5px #a40d0d,
						-5px 4px #dd4040,
						-5px 6px #a40d0d,
						-6px 5px #dd4040,
						-6px 7px #a40d0d,
						-7px 6px #dd4040,
						-7px 8px #a40d0d,
						-8px 7px #dd4040;
				}
			}
		`,
	],
})
export class YouWonComponent {
	@Output() readonly playAgain = new EventEmitter<void>();
}
