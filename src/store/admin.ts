import { createEvent, createStore } from 'effector'

export const setSidebarOpen = createEvent<boolean>()
export const $isSidebarOpen = createStore(false).on(setSidebarOpen, (state, payload) => payload)
