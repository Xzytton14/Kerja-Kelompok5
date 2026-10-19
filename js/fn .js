// Fungsi ini akan memindahkan halaman saat kotak layanan diklik
function klikLayanan(namaLayanan) {
    if (namaLayanan === 'Informasi Cilacap') {
        window.location.href = 'informasi.html';
    } else if (namaLayanan === 'Bank Terdekat') {
        window.location.href = 'bank.html';
    } else if (namaLayanan === 'Kesehatan') {
        window.location.href = 'kesehatan.html';
    } else if (namaLayanan === 'Pendidikan') {
        window.location.href = 'pendidikan.html';
    } else if (namaLayanan === 'Pariwisata') {
        window.location.href = 'wisata.html';
    } else if (namaLayanan === 'Kuliner') {
        window.location.href = 'kuliner.html';
    }
}

// Fungsi untuk tombol Cari
function klikCari() {
    let kataKunci = document.querySelector('.search-box').value;
    if (kataKunci === "") {
        alert("Kolom pencarian masih kosong! Ketik sesuatu dulu ya.");
    } else {
        alert("Anda mencari: " + kataKunci);
    }
}