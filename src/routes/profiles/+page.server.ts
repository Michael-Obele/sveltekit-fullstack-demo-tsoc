import { db } from '$lib/database';
import { fail, type Actions } from '@sveltejs/kit';

export async function load() {
  try {
    const users = await db.user.findMany();
    return {
      names: users,
    };
  } catch (error) {
    console.error(error);
    return;
  }
}

export const actions: Actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const name = data.get('name');
    const id = Number(data.get('id'));
    if (
      typeof email !== 'string' ||
      typeof name !== 'string' ||
      typeof id !== 'number'
    ) {
      return fail(400, { error: true });
    }
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));

    const userExist = await db.user.findFirst({
      where: {
        id,
      },
    });
    if (!userExist) {
      return fail(400, { error: true });
    }

    await db.user.delete({
      where: {
        id,
      },
    });

    return { success: true };
  },

  create: async ({ request }) => {
    const data = await request.formData();

    const email = String(data.get('email'));
    const name = String(data.get('name'));

    const userExist = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      return fail(400, { error: true });
    }

    await db.user.create({
      data: {
        email,
        name,
      },
    });

    return { success: true };
  },
};
