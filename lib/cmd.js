const limitcount = (limitCounts) => {
	return`
	*♻️LIMIT COUNT♻️*
	*~>Sisa Limit*: ${limitCounts}*
	
	*NOTE*
	*Jika Ingin Menambah Limit Bisa Buy Limit Atau Tunggu jam 21.00 ^^*
	`
}

const limitend = (pushname) => {
	return`*Maaf Limit Request Telah Habis Kembali Besok^^*`
}

exports.limitcount = limitcount
exports.limitend = limitend