# Quiprendquoi

Crée ta liste partagée et optimise l'organisation de tes futurs évènements

<i>Un petit projet scolaire pour s'ouvrir au <strong>responsive design</strong>...</i>

## Installation

`npm install`
<br>
`npm run start`

## Améliorations apportées

- Affichage des items (page évènement, `app.js`,`form_manage_item.pug`)
- Possibilité de supprimer un item (page évènement, `app.js`,`form_manage_item.pug`)
- Meilleure présentation visuelle globale (`/styles`)

## Article personnel

### Sujet : Pug

Ma redécouverte de la semaine est bien `Pug`, le moteur de template que nous avons utilisé pour strucuter ce projet. Malgré une brève initiation l'an dernier, je ne m'étais jamais lancée à la découverte de cette "chose" sans balises qui me faisait un peu peur ; à l'instar de `Twig` j'étais très réticente à l'idée de faire autre chose que du `html` bien comme je connais (conservatrice... c'est triste). 

`Pug` est donc un langage de templating implémenté en `JS` qui permet de structurer dynamiquement notre `html`, son but est par conséquent de nous faciliter la vie.

Je m'en suis servie ici principalement pour importer des composants front (ex : `header.pug`, `form.pug`, ...) et inclure des variables au contenu fixe, comme demandé dans le TP. J'ai découvert que l'on pouvait également créer des `mixins`, j'aurais pu en utiliser pour générer les formulaires, car c'est l'élément qui se répète le plus, mais je n'en ai pas trouvé l'utilité étant donné que leurs structures différaient trop.

La prise en main de cet outils est plutôt simple finalement, on s'habitue rapidement à l'absence de balises, la syntaxe rappelle un peu celle du `css` et on est satisfait de réduire les lignes de code. À présent je remet en question mon usage d'un framework comme `react.js` pour certains de mes petits projets qui pourraient être très bien implémentés avec `pug`.