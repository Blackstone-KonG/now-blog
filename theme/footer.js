const YEAR = (new Date).getFullYear()

export default () => <footer>
  <abbr title='This site and all its content are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.'>CC BY-NC-SA 4.0</abbr> © 2019 ❤️ Blackstone KonG
  <style jsx>{`
    footer {
      margin-bottom: 2rem;
      font-size: .8rem;
      text-align: center;
      color: #999;
    }
    abbr {
      cursor: help;
      text-decoration: none;
      border-bottom: 1px dotted;
    }
  `}</style>
</footer>
