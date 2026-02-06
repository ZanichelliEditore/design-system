# Conventional Commits 1.0.0

La specifica *Conventional Commits* è una convenzione applicata ai messaggi di commit che fornisce un insieme semplice di regole per creare una cronologia di commit esplicita.  
Questa convenzione descrive le feature, i fix, i breaking change, ecc. presenti nei messaggi di commit.

Nel progetto `albe-web-components` siamo soliti usare un sottoinsieme delle opzioni possibili stabilite dalla specifica.

Il messaggio di commit dovrebbe seguire la seguente struttura:

`<type>(optional JIRA story code): <description>`

Ecco una breve spiegazione dei vari campi.

***TYPE***

Anche se la specifica ammette molti valori possibili come *type*, per `albe-web-components` utilizziamo solo i seguenti:

1. `fix`: se il commit corregge un bug;  
2. `feat`: se il commit introduce una nuova funzionalità;
3. `chore`: se il commit non modifica il codice (ad esempio aggiornamenti di dipendenze);
4. `docs`: se il commit introduce o migliora la documentazione.

Un commit che include un `!` dopo *type/scope* introduce una modifica incompatibile (*BREAKING CHANGE*, corrispondente a *MAJOR* nel versionamento semantico). Un *BREAKING CHANGE* può far parte di commit di qualsiasi tipo.

<u>**NOTA IMPORTANTE!** La libreria che utilizziamo per creare automaticamente il changelog prende in considerazione solamente i commit di tipo `feat` o `fix`. È opportuno quindi, nella maggior parte dei casi, che ad uno sviluppo corrisponda almeno un commit dei due tipi appena citati, affinché il changelog tenga traccia di quanto implementato.</u>

Fonte: [commit-and-tag-version - FAQ - Why do my refactor, chore etc changes not appear in the changelog?](https://github.com/absolute-version/commit-and-tag-version?tab=readme-ov-file#why-do-my-refactor-chore-etc-changes-not-appear-in-the-changelog "commit-and-tag-version - FAQ - Why do my refactor, chore etc changes not appear in the changelog?") 

***OPTIONAL JIRA STORY CODE***

Il campo *optional JIRA story code* (racchiuso tra parentesi tonde) <u>può</u> essere fornito come riferimento preciso alla storia JIRA dalla quale scaturisce lo sviluppo.

---

## Esempi

Commit message solo con descrizione

`feat: simple commit description`

Commit message con `!` per evidenziare un breaking change

`feat!: commit message with breaking change`

Commit message con optional JIRA story code

`feat(DS-959): in this commit message an optional JIRA story code is provided`

Commit message con optional JIRA story code e `!` per evidenziare un breaking change

`feat(DS-959)!: in this commit message an optional JIRA story code is provided and a breaking change is specified`

---

### Riferimento principale: [Conventional Commits](https://www.conventionalcommits.org "Conventional Commits")