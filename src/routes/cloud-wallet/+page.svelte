<script lang="ts">
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div
  class="mx-auto mt-10 w-full max-w-xl rounded-lg bg-white/30 p-12 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
>
  <form method="POST" action="?/login">
    <div class="-mx-3 mb-2 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="email"
        >
          Email
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="password"
        >
          Password
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
        />
      </div>
      <!-- <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-state">
              Email
            </label>
          </div> -->
      <button
        type="submit"
        class="ml-2 mt-5 rounded bg-yellow-500 px-2 font-bold text-white hover:bg-blue-700"
      >
        Login In
      </button>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Logged In. Your balance is {form?.balance}!</p>
  {/if}
</div>

<div
  class="m-20 mx-auto w-full max-w-xl rounded-lg bg-white/30 p-12 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
>
  <form method="POST" action="?/pay">
    <div class="-mx-3 mb-2 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="email"
        >
          Email
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="password"
        >
          Password
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
        />
      </div>
      <!-- <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-state">
              Email
            </label>
          </div> -->
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="paymail"
        >
          Paymail
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="paymail"
          type="text"
          placeholder="Enter paymail"
          name="paymail"
        />
      </div>
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          for="amount"
        >
          amount
        </label>
        <input
          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id="amount"
          type="text"
          placeholder="Enter amount"
          name="amount"
        />
      </div>

      <button
        type="submit"
        class="ml-2 mt-5 rounded bg-yellow-500 px-2 font-bold text-white hover:bg-blue-700"
      >
        Pay
      </button>
    </div>
  </form>
  {#if form?.success && form.payment}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">
      The payment was successful. Here is your <a
        href="https://whatsonchain.com/tx/{form?.payment}">transaction</a
      >!
    </p>
  {/if}
</div>
