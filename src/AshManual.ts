export type ManualEntry = {
    name: string;
    signatures: string[];
    documentation: string;
};

export const AshManual: Record<string, ManualEntry> = {};

function addEntry(entry: ManualEntry) {
    AshManual[entry.name] = entry;
}

addEntry({
    name: "abort",
    signatures: [
        "void abort()",
        "void abort(string message)"
    ],
    documentation:
        "Halts all queued functions and the entire script it is called from. " +
        "Accepts an optional abort message. Often used for error-handling.",
});

addEntry({
    name: "add_item_condition",
    signatures: [
        "void add_item_condition(int qty, item want)"
    ],
    documentation:
        "Adds qty of want to your current adventuring conditions.",
});

addEntry({
    name: "adv1",
    signatures: [
        "boolean adv1(location place, int turnsUsed, string filterFunc)"
    ],
    documentation:
        "This will adventure exactly once in the specified place (even if " +
        "it took no turns), although it will follow chained choice adventures for " +
        "as long as you have preset options. Returns true if all adventures " +
        "were used, and false if it is unable to do so for any reason.",
});

addEntry({
    name: "adv_cost",
    signatures: [
        "int adv_cost(skill use_me)"
    ],
    documentation:
        "Returns the adventure cost for the next cast of the given skill",
});

addEntry({
    name: "adventure",
    signatures: [
        "boolean adventure(int adventures, location place)",
        "boolean adventure(int adventures, location place, string filter)"
    ],
    documentation:
        "Runs the specified number of adventures at the given place. filter " +
        "is a combat action filter. The function returns true if the " +
        "specified number of adventures were used, and false if not. "
});

addEntry({
    name: "all_normal_outfits",
    signatures: [
        "string [int] all_normal_outfits()"
    ],
    documentation:
        "Returns a list of all available in-game outfits.",
});

addEntry({
    name: "appearance_rates",
    signatures: [
        "float [monster] appearance_rates(location place)",
        "float [monster] appearance_rates(location place, boolean queue)"
    ],
    documentation:
        "Returns a map, keyed by monster, with the appearance rate percentages as " +
        "decimal values (ie a 30% rate monster has a value of 30.0)."
});

addEntry({
    name: "append",
    signatures: [
        "buffer append(buffer original, string add)"
    ],
    documentation:
        "Returns a buffer containing original with add tacked on to the end",
});

addEntry({
    name: "append_replacement",
    signatures: [
        "buffer append_replacement(matcher match, buffer buff, string replace)"
    ],
    documentation:
        "Only valid immediately after find() has returned true for match. " +
        "It will copy text into the buffer starting after the previous match " +
        "(or the start of the original string) through the start of the current " +
        "match, and will then append the replace string",
});

addEntry({
    name: "append_tail",
    signatures: [
        "buffer append_tail(matcher match, buffer buff)"
    ],
    documentation:
        "Normally called only once, after find() returns false. It will " +
        "copy any remaining text into the buffer, after the final match.",
});

addEntry({
    name: "attack",
    signatures: [
        "buffer attack()",
    ],
    documentation:
        "Attacks with your weapon during a consult script, and returns the " +
        "HTML response text from said attempt.",
});

addEntry({
    name: "autosell",
    signatures: [
        "boolean autosell(int qty, item it)"
    ],
    documentation:
        "Attempts to autosell qty of it. Returns true if all items are sold " +
        "as specified, or as many as possible, and false otherwise.",
});

addEntry({
    name: "autosell_price",
    signatures: [
        "int autosell_price(item it)"
    ],
    documentation:
        "Returns the autosell price of item it, or a value <= 0 if the item " +
        "cannot be autosold.",
});

addEntry({
    name: "available_amount",
    signatures: [
        "int available_amount(item it)"
    ],
    documentation:
        "Returns the total number of the given item in all inventory sections " +
        "accessible to your character based on current restrictions, including " +
        "equipped items.",
});

addEntry({
    name: "available_choice_options",
    signatures: [
        "string [int] available_choice_options([boolean])"
    ],
    documentation:
        "idk lol",
});

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });

// addEntry({
//     name: "",
//     signatures: [

//     ],
//     documentation:
//         "",
//     wikiLink: "",
// });