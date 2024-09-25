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

export { cx, formatDate }
