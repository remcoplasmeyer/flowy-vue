<template lang="pug">
div
  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, label="Donate", auto-close)
    q-list(dense padding class="text-body2")
      q-item-label(header) Donate
      q-item(clickable, tag="a", href="https://github.com/sponsors/remcoplasmeyer", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiCardsHeart")
        q-item-section Github Sponsorship

      q-item(clickable, tag="a", href="https://donate.quasar.dev", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiCharity")
        q-item-section Quasar Github Sponsorship

  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, label="Donate", auto-close)
    q-list(dense padding class="text-body2")
      q-item-label(header) Donate
      q-item(clickable, tag="a", href="https://github.com/sponsors/remcoplasmeyer", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiCardsHeart")
        q-item-section Github Sponsorship

      q-item(clickable, tag="a", href="https://donate.quasar.dev", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiCharity")
        q-item-section Quasar Github Sponsorship

</template>

<script>
import {
  fabGithub, fasFlask, fabCodepen, fabJsfiddle,
  fasCubes, fabTwitter, fabFacebook
} from '@quasar/extras/fontawesome-v5'

import {
  mdiBlogger, mdiForum, mdiChat, mdiBullhorn,
  mdiViewDashboard, mdiShoppingMusic, mdiClipboardText,
  mdiBugCheck, mdiFlare, mdiFilePlus, mdiPaletteSwatch,
  mdiInvertColors, mdiCharity, mdiStarCircle, mdiCardsHeart
} from '@quasar/extras/mdi-v5'

export default {
  name: 'HeaderMenu',

  props: {
    align: String
  },

  created () {
    this.fabGithub = fabGithub
    this.fasFlask = fasFlask
    this.fabCodepen = fabCodepen
    this.fabJsfiddle = fabJsfiddle
    this.mdiCardsHeart = mdiCardsHeart
    this.fasCubes = fasCubes
    this.fabTwitter = fabTwitter
    this.fabFacebook = fabFacebook

    this.mdiBlogger = mdiBlogger
    this.mdiChat = mdiChat
    this.mdiForum = mdiForum
    this.mdiBullhorn = mdiBullhorn
    this.mdiViewDashboard = mdiViewDashboard
    this.mdiShoppingMusic = mdiShoppingMusic
    this.mdiClipboardText = mdiClipboardText
    this.mdiBugCheck = mdiBugCheck
    this.mdiFlare = mdiFlare
    this.mdiFilePlus = mdiFilePlus
    this.mdiPaletteSwatch = mdiPaletteSwatch
    this.mdiInvertColors = mdiInvertColors
    this.mdiCharity = mdiCharity
    this.mdiStarCircle = mdiStarCircle
  }
}
</script>
