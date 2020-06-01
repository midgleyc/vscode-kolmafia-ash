# KoLmafia ASH++

Language definition for the [KoLmafia ASH](https://wiki.kolmafia.us/index.php?title=Main_Page) language, a scripting language for the
game [Kingdom of Loathing](https://www.kingdomofloathing.com/).

Forked from [https://github.com/benblank/kolmafia-ash](https://github.com/benblank/kolmafia-ash).

## Features

* **Syntax Highlighting**

    ![Syntax Highlighting](images/syntax-highlighting.png)

* **Autosuggest & completion for ASH functions**

    ![Autosuggest & completion](images/autosuggest_completion_feature_example.gif)

* **Hover tooltips for ASH functions**

    ![Hover Tooltip](images/hover_tooltip_feature_example.gif)

* **Symbol Definitions**

    ![Symbol definition](images/symbol_definition_feature_example.gif)

## Known Issues/Limitations

* The symbol parser is currently quite brittle, and there are many things that can cause it to break (this only affects the symbol definition
  feature). These include:
    * Method calls on integers (e.g. `123.to_skill()`)
    * Function body without brackets around it
    * ASH record data structures
    * Template strings

## Changelog

See [CHANGELOG](CHANGELOG.md) for more information.


