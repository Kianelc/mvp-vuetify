import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
     // Current state of the application lies here.
    loadedMeetups: [
      {
        imageUrl: 'https://3.bp.blogspot.com/-8Kt1qFHMjs0/WNVOuCp7e5I/AAAAAAAAHrg/usCRVVGHssU7QXuIJh5vzlXh0P4dZ-hcQCLcB/s1600/FLORIPA.JPG',
        id: 'a8sdsa8d8sad4s8d4',
        title: 'Beira Mar Norte',
        date: '2017-07-01'
      },
      {
        imageUrl: 'https://2.bp.blogspot.com/-Hj2BFvYXPVA/WNVW9ErGvQI/AAAAAAAAHuI/3wPEfYoE-BopLxk4zuSZuudTGdcq5_GMQCLcB/s1600/HOTELMAJESTICPALACE-FLORIPA-002.jpg',
        id: '454adsad54asdas',
        title: 'Magestic',
        date: '2017-07-02'
      }
    ],
    users: {
      id: 'asdad545asd12',
      registeredMeetups: ['454adsad54asdas']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '123'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
     // Compute derived state based on the current state. More like computed property.
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
