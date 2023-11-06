# Prova GIT

**N.B.** prima di cominciare ogni esercizio, eseguire `git pull` per aggiornare la branch `master` e partire sempre da quella.

## Esercizio 1

1. Per tutti i successivi esercizi creare un `issue` su GitHub.
2. Per ogni issue, `assegnarlo` a se stessi e aggiungere un `label` singificativo.
3. Se un esercizio prevede più di un punto scomporlo in `sotto-task`, creando una `checklist` all'interno dell'issue.

## Esercizio 2

Sulla branch `<cognome>-init`:

1. Creare un file `page<Cognome>.tsx` all'interno della cartella `pages` (es. `pageRossi.tsx`).
2. All'interno del file creato, creare una `componente` che mostri, per il momento, il proprio nome e cognome.
3. All'interno del file `./src/db/users.ts` aggiungere un oggetto con le informazioni sulla propria pagina: `name` e `path`.

```typescript
export const users = [
  // ...

  {
    name: "Mario Rossi",
    path: "rossi",
  },
];
```

4. All'interno del file `./src/routing/router.tsx` aggiungere nell'array `children` un oggetto con le informazioni sulla propria pagina: `path` ed `element`.

```typescript
children: [
      {
        index: true,
        element: <App />,
      },

      // ...

      {
        path: "rossi",
        element: <PageRossi />,
      },
    ],
```

5. A questo eseguire `commit dedicate` per ogni file modificato/creato.
6. Eseguire la `push` della branch.
7. Creare una `pull request` della branch verso `master`.
8. Eseguire il `merge` della pull request.
9. **NON** cancellare la branch `<cognome>-init`.

## Esercizio 3

Sulla branch `master`:

1. nella cartella `./src/components` creare una cartella con il proprio cognome (es. `./src/components/rossi`).
2. nella propria cartella creare un file `Logo.tsx` che mostri un'instestazione con il proprio nome e cognome.
3. Aggiungere il componente `Logo` all'interno del componente `page<Cognome>`.
4. Eseguire `commit` <u>**senza**</u> `push` della branch.
5. Trovare il modo di spostare le modifiche fatte su un'altra `branch dedicata` ripulendo `master`.
6. All'interno del componente `page<Cognome>` aggiungere un tag di testo (e.g. `<p>`) con la soluzione (breve) che hai trovato.
7. Eseguire `commit` della branch dedicata e `push`.
8. Creare una `pull request` della branch dedicata verso `master`.
9. Eseguire il `merge` della pull request.

## Esercizio 4

Nella branch `<cognome>-init`:

1. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) con la soluzione al quesito: la mia branch dedicata è indietro di qualche commit rispetto a master, come faccio a portarla avanti? Cioè, come faccio a portare le modifiche fatte su master sulla mia branch dedicata?
2. Mettere in pratica la soluzione trovata.
3. Eseguire `commit` e `push` della branch dedicata.
4. Creare una `pull request` della branch dedicata verso `master`.
5. Eseguire il `merge` della pull request.

## Esercizio 5

Nella branch `<cognome>-multiple-commits`:

1. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un antipasto.
2. Eseguire `commit`.
3. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un primo.
4. Eseguire `commit`.
5. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un secondo.
6. Eseguire `commit`.
7. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un dolce.
8. Eseguire `commit`.
9. Ci ritoviamo con molti commit, come si può fare per unirli in un unico commit? Scrivilo in un tag di testo (e.g. `<p>`) all'interno del file `page<Cognome>.tsx`.
10. Mettere in pratica la soluzione trovata.
11. Eseguire `commit` e `push` della branch dedicata.
12. Creare una `pull request` della branch dedicata verso `master`.
13. Eseguire il `merge` della pull request.

## Esercizio 6

Nella branch `<cognome>-massive-merge`:

1. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un cantante.
2. Eseguire `commit`.
3. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un attore.
4. Eseguire `commit`.
5. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) scrivendo il nome di un calciatore.
6. Eseguire `commit`.
7. Esiste un modo per unire tutti questi commit in un unico commit quando si esegue il `merge` su `master`? Scrivilo in un tag di testo (e.g. `<p>`) all'interno del file `page<Cognome>.tsx`. Si può fare anche con una `pull request`?
8. Mettere in pratica la soluzione trovata. Se la soluzione scelta è eseguita in locale ricordarsi di eseguire `push` della branch `master`.

## Esercizio 7

Nella branch `<cognome>-perdono`:

1. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) con la risposta al seguente quesito: ho eseguito un `commit` ma mi sono accorto che ho sbagliato a scrivere il messaggio, come posso correggerlo?.
2. Eseguire `commit` con messaggio: _"cazzotto"_.
3. Modificare messaggio in: _"scusa"_
4. Creare un componente di testo `Ammenda.tsx` dedicato in cui mettere il tag di testo del punto 1.
5. Aggiungere il nuovo file creato alla commit _scusa_.
6. Eseguire `push` della branch dedicata.
7. Creare una `pull request` della branch dedicata verso `master`.
8. Eseguire il `merge` della pull request.

## Esercizio 8

Nella branch `master`:

1. Creare un componente `<Cognome>Button.tsx` all'interno della cartella `./src/components/<cognome>`.
2. Aggiungere il componente `<Cognome>Button` all'interno del componente `page<Cognome>`.
3. Eseguire `commit`.
4. Domanda: esiste un modo per "splittare" in 2 commit diverse la modifica di creazione del file `<Cognome>Button.tsx` e la modifica di aggiunta del componente `<Cognome>Button` al componente `page<Cognome>`? Scrivilo in un tag di testo (e.g. `<p>`) all'interno del file `page<Cognome>.tsx`.
5. Mettere in pratica la soluzione trovata.
6. Eseguire `push` della branch dedicata.

## Esercizio 9

Nella branch `master`:

1. Esiste un modo per riavvolgere il tempo in una branch? Scrivilo in un tag di testo (e.g. `<p>`) all'interno del file `page<Cognome>.tsx`.
2. esegui la `commit`.
3. Modificare a piacere il file `page<Cognome>.tsx`.
4. Eseguire `commit`.
5. Riavvolgere il tempo alla commit del punto 2.
6. Eseguire `push`.

## Esercizio 10

Nella branch `master`:

1. Nel file `page<Cognome>.tsx` aggiungere un tag di testo (e.g. `<p>`) con scritto: _"Angular è il framework più bello del mondo"_.
2. Eseguire `commit`.
3. Eseguire la `push`.
4. Trovare il modo di `invertire` la commit del punto 2.

## Esercizio 11

Nella branch `<cognome>-pause`:

1. Esiste un modo per `mettere in pausa` il lavoro su una branch e riprenderlo in un secondo momento? Scrivilo in un tag di testo (e.g. `<p>`) all'interno del file `page<Cognome>.tsx`.
2. Eseguire `commit`.
3. Eseguire `push`.
   4 Eseguire la `pull request` della branch dedicata verso `master`.
4. Eseguire il `merge` della pull request.
