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

  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, label="Support & Links", auto-close)
    q-list(dense padding class="text-body2")
      q-item-label(header) Support
      q-item(clickable, tag="a", :href="GLOBALS.discordURL", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiDiscord")
        q-item-section Author Discord
      q-item(clickable, tag="a", :href="GLOBALS.githubURL + '/issues'", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiLadybug")
        q-item-section Report issue

      q-item-label(header) Links
      q-item(clickable, tag="a", :href="GLOBALS.githubURL", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="fabGithub")
        q-item-section Github repository
      q-item(clickable, tag="a", href="https://quasar.dev", target="_blank", rel="noopener")
        q-item-section(side class="q-pr-sm")
          q-icon(:name="mdiCogOutline")
        q-item-section Quasar

</template>

<script>
import GLOBALS from '../globals'
import {
  fabGithub, fasFlask, fabCodepen, fabJsfiddle,
  fasCubes, fabTwitter, fabFacebook
} from '@quasar/extras/fontawesome-v5'

import {
  mdiBlogger, mdiForum, mdiChat, mdiBullhorn,
  mdiViewDashboard, mdiShoppingMusic, mdiClipboardText,
  mdiBugCheck, mdiFlare, mdiFilePlus, mdiPaletteSwatch,
  mdiInvertColors, mdiCharity, mdiStarCircle, mdiCardsHeart, mdiDiscord, mdiLadybug, mdiCogOutline
} from '@quasar/extras/mdi-v5'

export default {
  name: 'HeaderMenu',

  props: {
    align: String
  },

  created () {
    this.GLOBALS = GLOBALS
    this.mdiCogOutline = mdiCogOutline
    this.mdiLadybug = mdiLadybug
    this.mdiDiscord = mdiDiscord
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
