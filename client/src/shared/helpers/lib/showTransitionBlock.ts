// // function onEntry(entry) {
// //   entry.forEach(change => {
// //     if (change.isIntersecting) {
// //      change.target.classList.add('element-show');
// //     }
// //   });
// // }

// // let options = {
// //   threshold: [0.5] };
// // let observer = new IntersectionObserver(onEntry, options);
// // let elements = document.querySelectorAll('.element-animation');

// // for (let elm of elements) {
// //   observer.observe(elm);
// // }

// const options = {
// 	threshold: [0.5],
// };
// const observer = new IntersectionObserver(onEntry, options);
// const elements = document.querySelectorAll('.element-animation');

// for (let elm of elements) {
// 	observer.observe(elm);
// }

// function onEntry(entry: IntersectionObserverEntry[]) {
// 	entry.forEach((change) => {
// 		if (change.isIntersecting) {
// 			change.target.classList.add('element-show');
// 		}
// 	});
// }
