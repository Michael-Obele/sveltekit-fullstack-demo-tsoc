<script lang="ts">
  import { PrivateKey } from '@bsv/sdk';

  let WIF: string;
  let address: string;
  let noDetails = 'Nothing yet, generate one now!';

  function createKeys() {
    const privKey = PrivateKey.fromRandom();
    WIF = privKey.toWif();
    console.log('Private Key WIF format is ', WIF);
    address = privKey.toAddress();
    console.log('Your bitcoin address is ', address);
  }
</script>

<section class="container mx-4">
  <button
    type="button"
    class="mx-auto my-4 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    on:click={createKeys}
  >
    Generate New Wallet Keys
  </button>
  <p>
    Private Key WIF format is <span class="font-mono font-normal text-gray-800"
      >{WIF || noDetails}</span
    >
  </p>
  <p>
    Your BitCoin Address is <span class="font-mono font-normal text-gray-800"
      >{address || noDetails}</span
    >
  </p>
</section>
