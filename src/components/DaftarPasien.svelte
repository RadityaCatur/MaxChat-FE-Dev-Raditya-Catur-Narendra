<script>
  const tableHeader = ["Nama", "Rekam Medis", "NIK", "Tanggal Lahir", "Jenis Kelamin", "Pendidikan", "Status"]
  const tableHeading = ["nama", "rekam_medis", "nik", "tgl_lahir", "jenis_kelamin", "pendidikan", "status"];
  let tableData = [
    {
      "nama": "Santoso Ibadul Alim",
      "rekam_medis": "17200001",
      "nik": "3522009010001",
      "tgl_lahir": "1998-02-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Agus Jatmiko",
      "rekam_medis": "17200002",
      "nik": "3522009010002",
      "tgl_lahir": "1993-08-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Suyati Shinka Amartha",
      "rekam_medis": "17200003",
      "nik": "3522009010003",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Perempuan",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Winda Kusmiati Aldianti",
      "rekam_medis": "17200004",
      "nik": "3522009010004",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Perempuan",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Ana Andriani",
      "rekam_medis": "17200005",
      "nik": "3522009010005",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Perempuan",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Sulaiman Hakam",
      "rekam_medis": "17200006",
      "nik": "3522009010006",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Dadang Sudana",
      "rekam_medis": "17200007",
      "nik": "3522009010007",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Indra Bachtiar",
      "rekam_medis": "17200008",
      "nik": "3522009010008",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Wardono",
      "rekam_medis": "17200009",
      "nik": "3522009010009",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Laki-laki",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    },
    {
      "nama": "Lia Sinta",
      "rekam_medis": "17200010",
      "nik": "3522009010010",
      "tgl_lahir": "2001-07-10",
      "jenis_kelamin": "Perempuan",
      "pendidikan": "SLTA Sederajat",
      "status": ""
    }
  ]
</script>

<div class="container mx-auto my-auto px-20 py-10">

  <div class="navbar grid grid-cols-10 gap-4">

    <div class="judul col-span-6 py-auto flex">
      <svg class="w-6 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
      </svg>
      <p class="text-2xl mx-6 text-gray-600">Daftar Pasien</p>
    </div>

    <div class="kolom-pencarian col-start-7 col-end-10">
      <form>   
        <label for="search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" class="block p-4 ps-10 w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari" required />
        </div>
      </form>
    </div>

    <div class="tombol-tambah col-end-11">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-auto w-full h-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+ Tambah</button>
    </div>
  </div>

  <div class="data-section relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {#each tableHeader as headers}
                <th scope="col" class="px-6 py-3">
                  {headers}
                </th>
              {/each}
            </tr>
        </thead>
        <tbody>
          {#each tableData as pasien}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {#each tableHeading as key, index}
                {@const k = key}
                {#if index===0}
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pasien[k]}
                </th>
                {:else}
                <td class="px-6 py-4">
                    {pasien[k]}
                </td>
                {/if}
                {/each}
            </tr>
          {/each}
        </tbody>
    </table>
  </div>
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.white);
    }
</style>