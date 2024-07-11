<script lang="ts">
  import { page } from '$app/stores';
  import { afterUpdate } from 'svelte';
  let defaultTab =
    'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0';
  let activeTab =
    'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0';

  const menu = [
    { href: '/', routeName: 'Home' },
    { href: '/profiles', routeName: 'Profiles' },
    { href: '/raw-wallet', routeName: 'Raw Wallet' },
    { href: '/cloud-wallet', routeName: 'Cloud Wallet' },
    { href: '/bounty', routeName: 'Bounty' },
  ];

  let currentPage = $page.url.pathname;
  afterUpdate(() => {
    currentPage = $page.url.pathname;
  });
</script>

<nav class="border-gray-200 bg-white">
  <div
    class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://tsoc.dev/TSoC_Favicon.svg"
        class="h-8"
        alt="TSoC Logo"
      />
      <span class="self-center whitespace-nowrap text-2xl font-semibold"
        >TSoC Fullstack Application</span
      >
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse"
      >
        {#each menu as item}
          <li>
            <a
              href={item.href}
              class="${currentPage === item.href ? activeTab : defaultTab}"
              aria-current="page">{item.routeName}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
