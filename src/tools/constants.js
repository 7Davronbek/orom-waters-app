export const LANGUAGE = 'OROM_LANGUAGE'

export const API_PATH = `https://backend.oromwater.uz/${localStorage.getItem(LANGUAGE) ? localStorage.getItem(LANGUAGE) : 'ru'}/main`
