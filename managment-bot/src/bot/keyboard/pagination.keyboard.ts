// export const paginationKeyboard = () => ([
// 	[
// 		Markup.button.callback(
// 			"⬅️",
// 			ad|views_history|${adId}|${timeInterval}|${Number(page) - 1},
// 			!history.hasPreviousPage
// 		),
// 		Markup.button.callback(${history.pages ? history.page + 1 : 0} / ${history.pages}, "empty"),
// 		Markup.button.callback(
// 			"▶️",
// 			ad|views_history|${adId}|${timeInterval}|${Number(page) + 1},
// 			!history.hasNextPage
// 		),
// 	],
// 	[Markup.button.callback(${emojis.back}Назад, ad|get_ad_info|${adId}|${timeInterval})],
// ])
