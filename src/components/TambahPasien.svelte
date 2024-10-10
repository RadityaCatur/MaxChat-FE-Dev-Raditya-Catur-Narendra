<script>
    // let autoFill = false;
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
</svelte:head>

<div class="container mx-auto my-auto px-20 py-10">

    <div class="navbar mb-7 grid grid-cols-10 gap-4">
  
      <div class="judul col-span-10 py-auto flex">
        <svg class="w-6 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
        </svg>
        <p class="text-2xl mx-6 text-gray-600">Tambah Pasien</p>
      </div>

    </div>

    <div class="garis mb-5"></div>

    <form class="max-w-l">
        <div class="col-span-10 py-auto flex">
            <p class="text-xl mb-5 text-gray-600 sm:text-center">Data Utama</p>
        </div>

        <div class="flex mb-5">
            <label for="nama" class="block basis-1/4 mb-2 my-auto text-sm font-medium text-gray-500 dark:text-white sm:w-max">Nama</label>
            <input type="text" id="nama" class="basis-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div class="flex mb-5">
            <div class="flex basis-2/3">
                <label for="tempat-lahir" class="block basis-1/3 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Tempat Lahir</label>
                <input type="text" id="tempat-lahir" class="basis-2/3 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="flex basis-1/3">
                <label for="tanggal-lahir" class="block basis-1/4 mb-2 my-auto mx-10 text-sm font-medium text-gray-500 dark:text-white">Tanggal Lahir</label>
                <input type="date" class="basis-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
            </div>
        </div>

        <div class="col-span-10 py-auto mt-10 flex">
            <p class="text-xl mb-5 text-gray-600">Alamat Sesuai KTP</p>
        </div>

        <div class="flex mb-5">
            <div class="flex basis-1/2">
                <label for="provinsi" class="block basis-1/4 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Provinsi</label>
                <div class="basis-1/4"></div>
                <input type="text" id="provinsi" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="flex basis-1/2">
                <label for="kota" class="block basis-1/4 mb-2 my-auto mx-10 text-sm font-medium text-gray-500 dark:text-white">Kota/Kab.</label>
                <div class="basis-1/4"></div>
                <input type="text" id="kota" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
        </div>
        <div class="flex mb-5">
            <div class="flex basis-1/2">
                <label for="kecamatan" class="block basis-1/4 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Kecamatan</label>
                <div class="basis-1/4"></div>
                <input type="text" id="kecamatan" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="flex basis-1/2">
                <label for="desa" class="block basis-1/4 mb-2 my-auto mx-10 text-sm font-medium text-gray-500 dark:text-white">Desa</label>
                <div class="basis-1/4"></div>
                <input type="text" id="desa" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            </div>
            <div class="flex mb-5">
                <label for="alamat" class="block basis-1/4 mb-2 my-auto text-sm font-medium text-gray-500 dark:text-white">Alamat</label>
                <input type="text" id="alamat" class="basis-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

        <div class="col-span-10 py-auto mt-10 flex">
            <p class="text-xl mb-5 text-gray-600">Alamat Domisili</p>
        </div>

        <div class="flex mt-3 mb-5">
            <label for="autoFill" class="block basis-1/8 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Sama dengan KTP</label>
            <label class="inline-flex items-center cursor-pointer">
                <!-- <button type="button" on:click={() => autoFill = true}> -->
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <!-- </button> -->
            </label>
        </div>

        <div class="flex mb-5">
            <div class="flex basis-1/2">
                <label for="provinsiDomisili" class="block basis-1/4 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Provinsi</label>
                <div class="basis-1/4"></div>
                <input type="text" id="provinsiDomisili" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="flex basis-1/2">
                <label for="kotaDomisili" class="block basis-1/4 mb-2 my-auto mx-10 text-sm font-medium text-gray-500 dark:text-white">Kota/Kab.</label>
                <div class="basis-1/4"></div>
                <input type="text" id="password" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
        </div>
        <div class="flex mb-5">
            <div class="flex basis-1/2">
                <label for="kecamatanDomisli" class="block basis-1/4 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Kecamatan</label>
                <div class="basis-1/4"></div>
                <input type="text" id="kecamatanDomisili" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="flex basis-1/2">
                <label for="desaDomisili" class="block basis-1/4 mb-2 my-auto mx-10 text-sm font-medium text-gray-500 dark:text-white">Desa</label>
                <div class="basis-1/4"></div>
                <input type="text" id="desaDomisili" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            </div>
            <div class="flex mb-5">
                <label for="alamatDomisili" class="block basis-1/4 mb-2 my-auto text-sm font-medium text-gray-500 dark:text-white">Alamat</label>
                <input type="text" id="alamatDomisili" class="basis-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="col-span-10 py-auto mt-10 flex">
                <p class="text-xl mb-5 text-gray-600">Anggota Keluarga Terdekat</p>
            </div>
    
            <div class="flex mb-5">
                <div class="flex basis-1/2">
                    <label for="hubunganKeluarga" class="block basis-1/4 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">Hubungan</label>
                    <div class="basis-1/4"></div>
                    <select id="hubunganKeluarga" class="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Hubungan Keluarga</option>
                        <option value="US">Kakek</option>
                        <option value="CA">Nenek</option>
                        <option value="FR">Ayah</option>
                        <option value="DE">Ibu</option>
                        <option value="DE">Kakak</option>
                        <option value="DE">Adik</option>
                        <option value="DE">Suami</option>
                        <option value="DE">Istri</option>
                        <option value="DE">Anak</option>
                      </select>
                </div>
            </div>
            <div class="flex mb-5">
                <label for="nama" class="block basis-1/4 mb-2 my-auto text-sm font-medium text-gray-500 dark:text-white">Nama</label>
                <input type="text" id="nama" class="basis-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="col-span-10 py-auto mt-10 flex">
                <p class="text-xl mb-5 text-gray-600">Anggota Keluarga Lain</p>
            </div>

            <div class="flex mb-5">
                <p class="basis-1/2 mb-2 text-center mr-10 text-sm font-medium text-gray-500 dark:text-white">Nama</p>
                <p class="basis-1/2 mb-2 text-center mr-10 text-sm font-medium text-gray-500 dark:text-white">Hubungan</p>
            </div>
    
            <div class="flex mb-5">
                <div class="flex w-full mr-5">
                    <label for="password" class="block basis-1/16 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">1</label>
                    <input type="password" id="password" class="basis-7/8 mr-5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <select id="hubunganKeluarga" class="basis-7/8 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Hubungan Keluarga</option>
                        <option value="US">Kakek</option>
                        <option value="CA">Nenek</option>
                        <option value="FR">Ayah</option>
                        <option value="DE">Ibu</option>
                        <option value="DE">Kakak</option>
                        <option value="DE">Adik</option>
                        <option value="DE">Suami</option>
                        <option value="DE">Istri</option>
                        <option value="DE">Anak</option>
                      </select>
                    <button>x</button>
                </div>
            </div>
            <div class="flex mb-5">
                <div class="flex w-full mr-5">
                    <label for="password" class="block basis-1/16 mb-2 my-auto mr-10 text-sm font-medium text-gray-500 dark:text-white">2</label>
                    <input type="password" id="password" class="basis-7/8 mr-5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <select id="hubunganKeluarga" class="basis-7/8 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Hubungan Keluarga</option>
                        <option value="US">Kakek</option>
                        <option value="CA">Nenek</option>
                        <option value="FR">Ayah</option>
                        <option value="DE">Ibu</option>
                        <option value="DE">Kakak</option>
                        <option value="DE">Adik</option>
                        <option value="DE">Suami</option>
                        <option value="DE">Istri</option>
                        <option value="DE">Anak</option>
                      </select>
                    <button>x</button>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>
        
        <div class="garis my-5"></div>

        <div class="mx-auto text-center">
            <a href="/">
                <button type="submit" class="text-grey bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kembali</button>
            </a>        
            <button type="submit" class="text-white bg-teal-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cetak</button>
            <button type="submit" class="text-white bg-teal-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Unggah</button>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
        </div>
    </form>
  
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.white);
    }

    .garis {
      border-bottom: 3px solid #bbb;
    }
</style>