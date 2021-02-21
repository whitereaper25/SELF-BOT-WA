const limitcount = (limitCounts) => {
	return`
	~≻ Sisa Limit Anda : ${limitCounts}
	`
}

const limitend = (pushname) => {
	return`[❗] Maaf ${pushname} Limit Kamu Telah Habis Kembali Besok^^`
}

exports.limitcount = limitcount
exports.limitend = limitend

	