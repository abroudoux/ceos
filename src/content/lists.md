# Les Listes en HTML : `<ul>` et `<ol>`

Les listes sont des éléments fondamentaux en HTML qui permettent de structurer le contenu de manière organisée. Il existe deux types principaux de listes en HTML : les listes non ordonnées (`<ul>`) et les listes ordonnées (`<ol>`).

## Liste Non Ordonnée (`<ul>`)

La liste non ordonnée est utilisée pour représenter une collection d'éléments sans ordre spécifique. Chaque élément de la liste est précédé d'une puce. Voici comment créer une liste non ordonnée en HTML :

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

Cela produira une liste qui ressemble à ceci :

<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>

## Liste Ordonnée (`<ol>`)

La liste ordonnée est utilisée pour représenter une collection d'éléments avec un ordre spécifique. Chaque élément de la liste est précédé d'un numéro. Voici comment créer une liste ordonnée en HTML :

```html
<ol>
  <li>Premier élément</li>
  <li>Deuxième élément</li>
  <li>Troisième élément</li>
</ol>
````

Cela produira une liste qui ressemble à ceci :

<ol>
  <li>Premier élément</li>
  <li>Deuxième élément</li>
  <li>Troisième élément</li>
</ol>

## Attributs Communs

Les deux types de listes partagent certains attributs communs qui peuvent être utilisés pour personnaliser leur apparence. Par exemple, l'attribut `type` dans `<ol>` peut être utilisé pour spécifier le type de numérotation. Voici un exemple :

```html
<ol type="A">
  <li>Élément A</li>
  <li>Élément B</li>
  <li>Élément C</li>
</ol>
````

Cela produira une liste numérotée avec des lettres :

<ol type="A">
  <li>Élément A</li>
  <li>Élément B</li>
  <li>Élément C</li>
</ol>

## Conclusion

En utilisant les éléments `<ul>` et `<ol>`, vous pouvez structurer votre contenu de manière claire et compréhensible. Choisissez entre une liste non ordonnée lorsque l'ordre n'est pas important, et une liste ordonnée lorsque l'ordre a une signification spécifique.
