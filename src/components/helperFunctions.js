const FLIP = (element, firstClass, lastClass) => {
	const first = element.getBoundingClientRect();
	element.classList.remove(firstClass);
	element.classList.add(lastClass);
	const last = element.getBoundingClientRect();
	return {
		x: first.left - last.left,
		y: first.top - last.top,
		scaleX: first.width / last.width,
		scaleY: first.height / last.height
	};
};

export { FLIP };

