function sendToWhatsapp(){
    let number = "6287871189406";

    let nama = document.getElementById('namaOwner').value;
    let namaMpus = document.getElementById('namaMpus').value;
    let alamat =  document.getElementById('alamat').value;
    let nomerwa =  document.getElementById('nomerWa').value;
    let keluhan =  document.getElementById('keluhan').value;
    let usiaMpus =  document.getElementById('usiaMpus').value;

    let url = "https://wa.me/" + number + "?text="
            + "Halo Mpushome Indonesia" +"%0a"+ "%0a"
            + "Nama Owner : " +nama+ "%0a"
            + "Nama Mpus : " +namaMpus+ "%0a"
            + "Alamat : " +alamat+ "%0a"
            + "Nomer Whatsapp : " +nomerwa+ "%0a"
            + "Keluhan : " +keluhan+ "%0a"
            + "Usia Mpus : " +usiaMpus+ "%0a"

        window.open(url, "_blank").focus();
}