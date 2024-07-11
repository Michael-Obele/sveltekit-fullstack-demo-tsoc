<script lang="ts">
  import { enhance } from '$app/forms';
  import { Pen, Trash, Check } from 'lucide-svelte';
  import { afterUpdate } from 'svelte';

  let id: number;
  let change = (i: number) => {
    id = i;
  };

  export let names;
</script>

<div
  class="mx-auto mt-10 w-full max-w-2xl rounded-lg bg-white/30 p-12 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
>
  <div class="mb-4 flex items-center justify-between">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Users</h2>
      <p class="text-sm text-gray-500">
        Fetched {names.length} users
      </p>
    </div>
  </div>
  <div class="divide-y divide-gray-900/5">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-3">
        <button on:click={() => change(user.id)}>
          <Pen class="size-4" />
        </button>
        <div class="flex items-center space-x-4">
          <div class="flex">
            <p
              class:hidden={user.id == id}
              class="pt-1 font-medium leading-none"
            >
              {user.name}
            </p>
            <p
              class:hidden={user.id == id}
              class="pl-5 pt-0 font-medium text-gray-500"
            >
              {user.email}
            </p>
          </div>
        </div>
        <form method="POST" action="/profiles?/update">
          <input type="hidden" name="id" id="id" value={user.id} />
          <div class:hidden={user.id !== id} class="flex w-full px-3">
            <input
              name="name"
              value={user.name}
              disabled={user.id !== id}
              class:opacity-0={user.id !== id}
              class="block w-fit max-w-[50%] rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              type="text"
            />
            <input
              name="email"
              value={user.email}
              disabled={user.id !== id}
              class:opacity-0={user.id !== id}
              class="block w-fit max-w-[50%] rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              type="text"
            />
            <button type="submit">
              <Check class="mx-1 size-4" />
            </button>
          </div>
        </form>

        <form method="POST" use:enhance action="/profiles?/delete">
          <input type="hidden" name="id" id="id" value={user.id} />
          <button
            disabled={user.id == id}
            class:opacity-30={user.id == id}
            type="submit"
          >
            <Trash class="float-right w-4" />
          </button>
        </form>
      </div>
    {/each}
  </div>
</div>
