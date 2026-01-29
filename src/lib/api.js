export async function fetchAPI(action, params = '') {
  const URL = `https://zeldvorik.ru/rebahin21/api.php?action=${action}${params}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      cache: 'no-store' // Agar data selalu fresh
    });

    const text = await response.text(); // Ambil teks mentah dulu untuk pengecekan
    
    // Cek apakah beneran JSON atau malah HTML error
    if (text.startsWith('<!DOCTYPE')) {
      console.error("API Error: Server mengirim HTML, bukan JSON.");
      return [];
    }

    const result = JSON.parse(text);
    return result.success && Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Gagal fetch:", error);
    return [];
  }
}