document.querySelector('a[href="#halaman"]').addEventListener('click', function () {
    var halamanContent = document.getElementById('halamanContent');
    if (halamanContent.style.display === 'none') {
      halamanContent.style.display = 'block';
    } else {
      halamanContent.style.display = 'none';
    }
  });