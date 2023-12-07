import siteMeta from './siteMeta.json';
const getSiteMeta = () => {
	return siteMeta;
};

const getColorPalettes = () => {
	const colorPalettes = {};
	Object.keys( siteMeta.colorpalette ).forEach( ( colorPalette ) => {
		colorPalettes[ colorPalette ] = Object.keys(
			siteMeta.colorpalette[ colorPalette ]
		).map( ( slug ) => {
			return {
				slug,
				title: slug[ 0 ].toUpperCase() + slug.slice( 1 ),
				color: siteMeta.colorpalette[ colorPalette ][ slug ],
			};
		} );
	} );

	return colorPalettes;
};

const getRandomColorPalette = ( activeColorPaletteSlug ) => {
	const colorPalettes = getColorPalettes();
	let keys = Object.keys( colorPalettes );
	if ( activeColorPaletteSlug ) {
		keys = keys.filter( ( key ) => {
			return key !== activeColorPaletteSlug;
		} );
	}

	const rand = Math.floor( Math.random() * keys.length );
	return {
		slug: keys[ rand ],
		palette: colorPalettes[ keys[ rand ] ],
	};
};

export { getSiteMeta, getColorPalettes, getRandomColorPalette };
