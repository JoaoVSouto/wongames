import type { GetStaticPaths, GetStaticProps } from 'next'

import { Game, GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'
    }
  }
}
