import Category from '../models/Category'
import CategoryThread from '../models/CategoryThread'
import Thread from '../models/Thread'

export async function getCategories(): Promise<Category[]> {
  const promise = new Promise<Category[]>((res, rej) => {
    setTimeout(() => {
      const categories = []
      const programming = new Category('1', 'Programming')
      const cooking = new Category('2', 'Cooking')
      const sports = new Category('3', 'Sports')
      const entertainment = new Category('4', 'Entertainment')
      const travel = new Category('5', 'Travel')

      categories.push()
    }, 2000);
  })
}

export async function getThreadsByCategory() {}

export async function getTopCategories() {}

export async function getThreadById() {}

export async function getUserThreads() {}
