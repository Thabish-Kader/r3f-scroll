export class ScrollDetector {
	constructor(private textElement: HTMLElement) {
		this.updateScrollValue();
		window.addEventListener("scroll", () => this.updateScrollValue());
	}

	public updateScrollValue(): void {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		const scrollableHeight = scrollHeight - clientHeight;
		const scrollValue = scrollTop / scrollableHeight;

		if (scrollValue === 1) {
			this.textElement.classList.add("visible");
		} else {
			this.textElement.classList.remove("visible");
		}
	}
}
