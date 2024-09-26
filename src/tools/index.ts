function cx(...args: unknown[]) {
	return args
		.flat()
		.filter((x) => typeof x === "string")
		.join(" ")
		.trim()
}

function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}

function cleanHyperlink(hyperlink: string) {
	return hyperlink.replace(/^https?:\/\//i, "")
}

function restructureHyperlink(hyperlink: string, host: string = "https://") {
	if (!hyperlink) return hyperlink

	const hasProtocol = /^https?:\/\//i.test(hyperlink)

	return hasProtocol ? hyperlink : `${host}${hyperlink}`
}

export { cx, formatDate, restructureHyperlink, cleanHyperlink }
