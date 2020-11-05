import React from 'react'

function Picture({fields: {file, title}}) {
	return (
		<>
			<picture data-prop="hereIAm">
				<source 
					sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" 
					srcSet={`${file.url}?fm=webp&w=300&fit=pad 300w,${file.url}?fm=webp&w=500&fit=pad 500w`}
					type="image/webp"/>
				<source 
					sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
					srcSet={`${file.url}?w=300&fit=pad 300w,${file.url}?w=500&fit=pad 500w`}
					type="image/"/>
				<img 
					src={`${file.url}`}
					alt={`${title}`} 
					sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" 
					srcSet={`${file.url}?w=300&fit=pad 300w,${file.url}?w=500&fit=pad 500w`}/>
			</picture>	
		</>
	)
}

export default Picture
