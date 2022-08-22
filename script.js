var app = new Vue({
  el: "#app",
  data: {
    pesan: "Haloo",
    name: "A'zham",
    angka: 0,
  },
  methods: {
    reverseWord: function () {
      this.pesan = this.pesan.split('').reverse().join('')
    },
    tambah: function () {
      this.angka = this.angka + 1;
    },
    kurang: function () {
      this.angka = this.angka - 1;
    },
    menghitung: function (option) {
      if (option === "tambah") {
        this.angka = this.angka + 1;
      } if (option === "kurang" && this.angka === 0) {
        alert("Udah nol jangan kurangin lagi :v")
      } if (option === "kurang" && this.angka >= 1) {
        this.angka = this.angka - 1
      }
    }
  }
})

console.log("Vuee");