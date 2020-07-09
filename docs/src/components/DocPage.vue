<template lang="pug">
q-page.doc-page

  h1.doc-heading.doc-h1#Introduction(v-if="title" @click="copyHeading('Introduction')")
    span {{ title }}
    q-badge.q-ml-sm.doc-page__badge(v-if="badge") {{ badge }}
    a.doc-page__top-link.float-right(v-if="noEdit === false", :href="editHref", target="_blank", rel="noopener noreferrer")
      q-icon(:name="mdiPencil", @click.stop)
        q-tooltip Improve page

  slot

  .doc-page-footer
    q-separator.q-mb-sm

    .q-mb-md(v-if="noEdit === false")
      | Caught a mistake? <doc-link :to="editHref">Suggest an edit on GitHub</doc-link>

    div.q-mt-md
      | <doc-link to="https://github.com/remcoplasmeyer/quasar-doc-starter/LICENSE">MIT LICENSE</doc-link>

    div Copyright © {{ year }} Remco Plasmeijer
</template>

<script>
import {
  fabGithub, fabTwitter, fabFacebook
} from '@quasar/extras/fontawesome-v5'

import {
  mdiBlogger, mdiForum, mdiChat, mdiCharity,
  mdiPencil, mdiLaunch,
  mdiChevronLeft, mdiChevronRight
} from '@quasar/extras/mdi-v5'

import { copyHeading } from 'assets/page-utils'

const year = (new Date()).getFullYear()

export default {
  name: 'DocPage',

  created () {
    this.fabGithub = fabGithub
    this.fabTwitter = fabTwitter
    this.fabFacebook = fabFacebook

    this.mdiBlogger = mdiBlogger
    this.mdiForum = mdiForum
    this.mdiChat = mdiChat
    this.mdiCharity = mdiCharity
    this.mdiPencil = mdiPencil
    this.mdiLaunch = mdiLaunch
    this.mdiChevronLeft = mdiChevronLeft
    this.mdiChevronRight = mdiChevronRight
  },

  props: {
    title: String,
    related: Array,
    nav: Array,
    noEdit: Boolean,
    badge: String
  },

  data () {
    return {
      year
    }
  },

  computed: {
    editHref () {
      return `https://github.com/remcoplasmeyer/flowy-vue/edit/master/docs/src/pages${this.$route.path}.md`
    }
  },

  methods: {
    copyHeading
  }
}
</script>

<style lang="sass">
.doc-page
  padding: 16px 46px
  font-weight: 300
  max-width: 1200px
  margin-left: auto
  margin-right: auto

  > div, > pre
    margin-bottom: 22px

  &__top-link
    color: inherit
    text-decoration: none
    outline: 0

  &__badge
    vertical-align: super

@media (max-width: 600px)
  .doc-page
    padding: 16px

.doc-page-related
  color: $grey-9
  transition: color .28s
  border: 1px solid rgba(0,0,0,.1)

  &:hover
    color: $primary

.doc-page-related-bordered
  border: 1px solid $separator-color

.doc-page-footer
  font-size: 12px
  padding: 36px 0 16px

  &__icons
    font-size: 28px

    a
      text-decoration: none
      outline: 0
      color: $primary
      transition: color .28s

      &:hover
        color: $grey-8

.doc-page-nav
  margin: 68px 0 0
  margin-bottom: 0 !important

  .q-link
    position: relative
    &:before
      content: ''
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      background: #000
      opacity: 0
      transition: opacity .28s
    &:focus:before
      opacity: .1

  & + &
    margin-top: 0

  .q-icon
    font-size: 1.75em

  &__categ
    font-size: .8em

  &__name
    font-size: 1em
</style>
