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
        "Adds *qty* of want to your current adventuring conditions.",
});

addEntry({
    name: "adv1",
    signatures: [
        "boolean adv1(location place, int turnsUsed, string filterFunc)"
    ],
    documentation:
        "This will adventure exactly once in the specified *place* (even if " +
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
        "Runs the specified number of adventures at the given *place*. *filter* " +
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
        "Returns a buffer containing *original* with *add* tacked on to the end",
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
        "match, and will then append the *replace* string",
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
        "Attempts to autosell *qty* of *it*. Returns true if all items are sold " +
        "as specified, or as many as possible, and false otherwise.",
});

addEntry({
    name: "autosell_price",
    signatures: [
        "int autosell_price(item it)"
    ],
    documentation:
        "Returns the autosell price of item *it*, or a value <= 0 if the item " +
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

addEntry({
    name: "batch_close",
    signatures: [
        "boolean batch_close()"
    ],
    documentation:
        "Execute all batched functions at once. Must be used after batch_open(). The functions that benefit from being batched include " +
        "autosell(), mallsell(), and the various put_x(), take_X() functions that move items to or from the closet, storage, display, or " +
        "stash",
});

addEntry({
    name: "batch_open",
    signatures: [
        "void batch_open()"
    ],
    documentation:
        "Marks the start of a batch operation. It must eventually be followed by batch_close()",
});

addEntry({
    name: "bjornify_familiar",
    signatures: [
        "boolean bjornify_familiar(familiar target)"
    ],
    documentation:
        "Bjornifies the specified familiar in a Buddy Bjorn. Returns false if something goes wrong, true otherwise.",
});

addEntry({
    name: "black_market_available",
    signatures: [
        "boolean black_market_available()"
    ],
    documentation:
        "Returns boolean indicating if the character has unlocked the Black Market.",
});

addEntry({
    name: "boolean_modifier",
    signatures: [
        "boolean boolean_modifier(string str)",
        "boolean boolean_modifier(item it, string str)"
    ],
    documentation:
        "Accesses fields of your current modifiers for all of your current equipment and effects.",
});

addEntry({
    name: "buffed_hit_stat",
    signatures: [
        "int buffed_hit_stat()"
    ],
    documentation:
        "Returns the buffed value of the stat that is used to calculate hit percentages.",
});

addEntry({
    name: "buy",
    signatures: [
        "boolean buy(int qty, item it)",
        "boolean buy(coinmaster master, int qty, item it)",
        "int buy(int qty, item it, int price)"
    ],
    documentation:
        "Attempts to purchase a specified quantity of an item. If the coinmaster signature is used, it will attempt to purchase from " +
        "that coinmaster, otherwise from an NPC store or the mall using meat.",
});

addEntry({
    name: "buy_price",
    signatures: [
        "int buy_price(coinmaster master, item it)"
    ],
    documentation:
        "Returns the number of tokens that *master* will trade you if you sell *it* to him.",
});

addEntry({
    name: "buy_using_storage",
    signatures: [
        "boolean buy_using_storage(int qty, item it)",
        "int buy_using_storage(int qty, item it, int price)"
    ],
    documentation:
        "Attempts to mall purchase a specified quantity of an item using meat in Hangk's Storage.",
});

addEntry({
    name: "buys_item",
    signatures: [
        "boolean buys_item(coinmaster master, item it)"
    ],
    documentation:
        "Returns a boolean indicating if the given coinmaster will purchase the item",
});

addEntry({
    name: "can_drink",
    signatures: [
        "boolean can_drink()"
    ],
    documentation:
        "Returns true if the character is not subject to the dietary restrictions of a Teetotaler or Oxygenarian path. Returns " +
        "false otherwise.",
});

addEntry({
    name: "can_eat",
    signatures: [
        "boolean can_eat()"
    ],
    documentation:
        "Returns true if the character is not subject to the dietary restrictions of a Boozetafarian or Oxygenarian path. Returns " +
        "false otherwise.",
});

addEntry({
    name: "can_equip",
    signatures: [
        "boolean can_equip(item check_me)"
    ],
    documentation:
        "Returns boolean indicating whether your stats are high enough to equip the given item. Note that this function doesn't check " +
        "for whether or not you actually have the item, just whether you're capable of holding it.",
});

addEntry({
    name: "can_faxbot",
    signatures: [
        "boolean can_faxbot(monster mob)"
    ],
    documentation:
        "Checks to see if *mob* can be faxed by any of the faxbots known to KoLmafia which are currently online.",
});

addEntry({
    name: "can_interact",
    signatures: [
        "boolean can_interact()"
    ],
    documentation:
        "Returns true if the character is subject to neither Hardcore nor Ronin restrictions. Returns false otherwise",
});

addEntry({
    name: "canadia_available",
    signatures: [
        "boolean canadia_available()"
    ],
    documentation:
        "Returns boolean indicating whether the character has access to Little Canadia",
});

addEntry({
    name: "ceil",
    signatures: [
        "int ceil(float number)"
    ],
    documentation:
        "Mathematical ceiling function. Returns the smallest integer greater than or equal to *number*.",
});

addEntry({
    name: "change_mcd",
    signatures: [
        "boolean change_mcd(int mcd_level)"
    ],
    documentation:
        "Attempts to change your mind-control device (MCD) to the specified level, returning true if successful. Attempting to change " +
        "the MCD to an impossible number will generate an abort error.",
});

addEntry({
    name: "char_at",
    signatures: [
        "string char_at(string source, int i)"
    ],
    documentation:
        "Returns the character in *source* at which is at position *i*.",
});

addEntry({
    name: "chat_clan",
    signatures: [
        "void chat_clan(string message)",
        "void chat_clan(string message, string channel)"
    ],
    documentation:
        "Post a message in your clan chat channel",
});

addEntry({
    name: "chat_macro",
    signatures: [
        "void chat_macro(string message)"
    ],
    documentation:
        "Send a macro to chat. The message argument should contain all the information about your macro.",
});

addEntry({
    name: "chat_notify",
    signatures: [
        "void chat_notify(string message, string color)"
    ],
    documentation:
        "Send notifications to chat",
});

addEntry({
    name: "chat_private",
    signatures: [
        "void chat_private(string player, string message)"
    ],
    documentation:
        "Send in-game private messages through chat to any player.",
});

addEntry({
    name: "chew",
    signatures: [
        "boolean chew(int qty, item consume)"
    ],
    documentation:
        "Attempts to consume *qty* amount of the given spleen item *consume*. Returns true for chewable items and false for items " +
        "that are not. The return value does not reflect whether or not the items were actually consumed.",
});

addEntry({
    name: "class_modifier",
    signatures: [
        "class class_modifier(item check_me, string modifier_name)",
        "class class_modifier(string check_me, string modifier_name)"
    ],
    documentation:
        "Returns a class if *check_me* is class specific. *modifier_name* should be \"Class\".",
});

addEntry({
    name: "clear",
    signatures: [
        "void clear(aggregate map)"
    ],
    documentation:
        "Clears the aggregate *map* of all its keys & data.",
});

addEntry({
    name: "cli_execute",
    signatures: [
        "boolean cli_execute(string command)"
    ],
    documentation:
        "Passes the parameter *command* on to KoLmafia's CLI, which will execute it as if it were typed in through the normal interface. " +
        "Returns boolean indicating whether or not the CLI command was executed properly.",
});

addEntry({
    name: "closet_amount",
    signatures: [
        "int closet_amount(item it)"
    ],
    documentation:
        "Returns the amount of the given item *it* that is contained in your closet.",
});

addEntry({
    name: "combat_mana_cost_modifier",
    signatures: [
        "int combat_mana_cost_modifier()"
    ],
    documentation:
        "Returns the total amount of passive MP cost reduction available in combat.",
});

addEntry({
    name: "combat_rate_modifier",
    signatures: [
        "float combat_rate_modifier()"
    ],
    documentation:
        "Returns the current percentage change on combat frequency including equipment and effects.",
});

addEntry({
    name: "contains_text",
    signatures: [
        "boolean contains_text(string str, string substring)"
    ],
    documentation:
        "Returns true if *substring* can be found within *str*.",
});

addEntry({
    name: "council",
    signatures: [
        "void council()"
    ],
    documentation:
        "Visits the council and prints the text there to the CLI. It is useful insofar as it will trigger the start of level-specific " +
        "quests.",
});

addEntry({
    name: "count",
    signatures: [
        "int count(aggregate map)"
    ],
    documentation:
        "Returns the number of keys in the specified aggregate.",
});

addEntry({
    name: "craft",
    signatures: [
        "int craft(string mode, int count, item item1, item item2)"
    ],
    documentation:
        "Attempts to craft raw materials *count* times **without** considering the outcome of that crafting. Returns the number of " +
        "each ingredient used.\n" +
        "The *mode* parameter can be 'combine', 'cook', 'cocktail', 'smith', or 'jewelry'.",
});

addEntry({
    name: "craft_type",
    signatures: [
        "string craft_type(item check_me)"
    ],
    documentation:
        "Returns a string identifying how an item is crafted and any other requirements for creating it.",
});

addEntry({
    name: "creatable_amount",
    signatures: [
        "int creatable_amount(item check)"
    ],
    documentation:
        "Returns the total number of *check* that can you currently create within the limits of your current inventory, skills, etc.",
});

addEntry({
    name: "creatable_turns",
    signatures: [
        "int creatable_turns(item check_me)",
        "int creatable_turns(item check_me, int qty)",
        "int creatable_turns(item check_me, int qty, boolean free)",
        "Returns the number of turns required to craft *check_me* (*qty* times, or 1 if unspecified)."
    ],
    documentation:
        "",
});

addEntry({
    name: "create",
    signatures: [
        "boolean create(int qty, item make)"
    ],
    documentation:
        "Attempts to create *qty* of *make*, following your KoLmafia settings regarding purchases. Returns true if all items are " +
        "sueccessfully created, and false otherwise.",
});

addEntry({
    name: "create_matcher",
    signatures: [
        "matcher create_matcher(string regex, string input)"
    ],
    documentation:
        "Creates a matcher from a pattern and input string.",
});

addEntry({
    name: "current_hit_stat",
    signatures: [
        "stat current_hit_stat()"
    ],
    documentation:
        "Returns the stat that is currently being used to calculate hit percentages.",
});

addEntry({
    name: "current_mcd",
    signatures: [
        "int current_mcd()"
    ],
    documentation:
        "Returns the current level of the character's mind-control device (Detuned Radio, Super-Secret Canadian Mind-Control Device, or " +
        "Annoy-o-Tron 5000).",
});

addEntry({
    name: "dad_sea_monkee_weakness",
    signatures: [
        "element dad_see_monkee_weakness(int round)"
    ],
    documentation:
        "Returns the elemental weaknkess of Dad Sea Monkee for a given round of combat.",
});

addEntry({
    name: "daily_special",
    signatures: [
        "item daily_special()"
    ],
    documentation:
        "Returns the item offered as a daily special at either Chez Snootee or The Gnomish Micromicrobrewery, per your current moon sign.",
});

addEntry({
    name: "damage_absorption_percent",
    signatures: [
        "float damage_absorption_percent()"
    ],
    documentation:
        "Returns the total percentage of damage absorption of all your gear and effects.",
});

addEntry({
    name: "damage_reduction",
    signatures: [
        "int damage_reduction()"
    ],
    documentation:
        "Returns the damage that is reducted as a result of damage reduction effects.",
});

addEntry({
    name: "delete",
    signatures: [
        "buffer delete(buffer original, int strStart, int strEnd)"
    ],
    documentation:
        "Returns the buffer *original* with the substring from *strStart* to *strEnd* removed.",
});

addEntry({
    name: "disable",
    signatures: [
        "void disable(string func)"
    ],
    documentation:
        "Disable a command and/or function by name. Note that this includes custom ASH functions (that you name yourself), but not " +
        "aliases.",
});

addEntry({
    name: "dispensary_available",
    signatures: [
        "boolean dispensary_available()"
    ],
    documentation:
        "Returns boolean indicating whether the plaayer has learned the password to the Knob Dispensary and possesses the Cobb's Knob lab key.",
});

addEntry({
    name: "display_amount",
    signatures: [
        "int display_amount(item it)"
    ],
    documentation:
        "Returns the amount of the given item that is contained in your display case.",
});

addEntry({
    name: "drink",
    signatures: [
        "boolean drink(int qty, item consume)"
    ],
    documentation:
        "Attempts to drink *qty* amount of item *consume*. Returns true for drinkable items and false for items that are not. The return " +
        "value does not reflect whether or not the items were actually consumed.",
});

addEntry({
    name: "eat",
    signatures: [
        "boolean eat(int qty, item consume)"
    ],
    documentation:
        "Attempts to eat *qty* amount of item *consume*. Returns true for food items and false for items that are not. The return value " +
        "does not reflect whether or not the items were actually consumed.",
});

addEntry({
    name: "eatsilent",
    signatures: [
        "boolean eatsilent(int qty, item consume)"
    ],
    documentation:
        "Attempts to eat *qty* amount of item *consume*. Returns true for food items and false for items that are not. The return value " +
        "does not reflect whether or not the items were actually consumed. Differs from eat() in that it does not show a warning dialog " +
        "if Milk of Magnesium was not consumed prior to eating.",
});

addEntry({
    name: "effect_modifier",
    signatures: [
        "effect effect_modifier(string check_me, string modifier_name)",
        "effect effect_modifier(item check_me, string modifier_name)"
    ],
    documentation:
        "Returns an effect if *check_me* is effect specific. *modifier_name* is the modifier to check for.",
});

addEntry({
    name: "elemental_resistance",
    signatures: [
        "float elemental_resistance(element elem)"
    ],
    documentation:
        "Returns your current resistance for the specific element in the form of a floating point integer.",
});

addEntry({
    name: "empty_closet",
    signatures: [
        "boolean empty_closet()"
    ],
    documentation:
        "Removes every item from your closet in a single server hit. Returns true if successful, and false otherwise.",
});

addEntry({
    name: "enable",
    signatures: [
        "void enable(string func)"
    ],
    documentation:
        "Re-enable a previously-disabled function. *enable(\"all\")* will enable all disabled functions. See disable() more for " +
        "details.",
});

addEntry({
    name: "end",
    signatures: [
        "int end(matcher pattern)",
        "int end(matcher pattern, int group)"
    ],
    documentation:
        "Returns the index after the last character matched by the specified capturing group, or if no *group* is specified, it returns " +
        "the index after the last group found. If the match was successful, but the group did not match anything, then it returns -1.",
});

addEntry({
    name: "enthrone_familiar",
    signatures: [
        "boolean enthrone_familiar(familiar target)"
    ],
    documentation:
        "Enthrones the specified familiar. Returns boolean indicating whether the operation was successful.",
});

addEntry({
    name: "entity_decode",
    signatures: [
        "string entity_decode(string value)"
    ],
    documentation:
        "Retrieves text from form fields that contain special characters such as ampersands and angle brackets.",
});

addEntry({
    name: "entity_encode",
    signatures: [
        "string entity_encode(string value)"
    ],
    documentation:
        "Converts text that might contain special characters such as ampersands and angle brackets so that it can safely be " +
        "displayed in HTML.",
});

addEntry({
    name: "equip",
    signatures: [
        "boolean equip(item equip_me)",
        "boolean equip(slot where, item equip)"
    ],
    documentation:
        "Attempts to equip the item *equip_me* in the slot *where* if specified. Returns boolean indicating whether or not the " +
        "operation was successful.",
});

addEntry({
    name: "equip_all_familiars",
    signatures: [
        "boolean equip_all_familiars()"
    ],
    documentation:
        "Equips all of your familiars with their specified equipment, if possible.",
});

addEntry({
    name: "equipped_amount",
    signatures: [
        "int equipped_amount(item it)"
    ],
    documentation:
        "Returns the amount of a given item currently equipped on your character.",
});

addEntry({
    name: "equipped_item",
    signatures: [
        "item equipped_item(slot check)"
    ],
    documentation:
        "Returns the item equipped in the given slot. Returns *$item[none]* if your character has nothing equipped there.",
});

addEntry({
    name: "eudora",
    signatures: [
        "boolean eudora(string correspondent)",
        "string eudora()"
    ],
    documentation:
        "Similar to the CLI 'eudora' command. The boolean version switches between correspondents and returns a boolean indicating " +
        "success. The string version returns the current correspondent.",
});

addEntry({
    name: "expected_damage",
    signatures: [
        "int expected_damage()",
        "int expected_damage(monster check_me)"
    ],
    documentation:
        "Returns an estimate of how much damage the specified monster *check_me* will deal to you (given your current player status). " +
        "If *check_me* is not specified, it defaults to the last monster you encountered.",
});

addEntry({
    name: "experience_bonus",
    signatures: [
        "float experience_bonus()"
    ],
    documentation:
        "Returns your current combined **mainstat** bonuses from familiar, equipment, monster level, and effects.",
});

addEntry({
    name: "expression_eval",
    signatures: [
        "float expression_eval(string expression)"
    ],
    documentation:
        "Evaluates a mathematical expression using only the base components of the evaluator. See wiki page for more details.",
});

addEntry({
    name: "extract_items",
    signatures: [
        "int [item] extract_items(string text)"
    ],
    documentation:
        "Searches the supplied string *text* for either the phrase 'You acquire an item: THING' or 'You acquire # THINGS'. It then " +
        "returns a map keyed by items ('THING'), with the quantity of each item as the value.",
});

addEntry({
    name: "extract_meat",
    signatures: [
        "int extract_meat(string text)"
    ],
    documentation:
        "Searches the supplied string *text* for either the phrase 'You gain X Meat' or 'You lose X Meat' and returns X.",
});

addEntry({
    name: "familiar_equipment",
    signatures: [
        "item familiar_equipment(familiar check_me)"
    ],
    documentation:
        "Returns the most commonly associated familiar equipment for the specified familiar.",
});

addEntry({
    name: "familiar_equipped_equipment",
    signatures: [
        "item familiar_equipped_equipment(familiar check_me)"
    ],
    documentation:
        "Returns the familiar equipment worn by the specified familiar *check_me*. If *check_me* is not wearing anything " +
        "or you do not have the specified familiar, it returns *$item[none]*.",
});

addEntry({
    name: "familiar_weight",
    signatures: [
        "int familiar_weight(familiar fam)"
    ],
    documentation:
        "Returns the **base** weight of the specified familiar.",
});

addEntry({
    name: "favorite_familiars",
    signatures: [
        "boolean [familiar] favorite_familiars()"
    ],
    documentation:
        "Returns a map of all the familiars that are available and in your favorites list. This map excludes any favorite familiars that " +
        "aren't available as evaluated by is_unrestricted(). The boolean value in the map is always true.",
});

addEntry({
    name: "faxbot",
    signatures: [
        "boolean faxbot(monster m)",
        "boolean faxbot(monster m, string botName)"
    ],
    documentation:
        "Requests the specified monster from one of KoLmafia's known faxbots (currently only EasyFax or CheeseFax).",
});

addEntry({
    name: "file_to_map",
    signatures: [
        "boolean file_to_map(string file_to_load, aggregate map_to_fill)",
        "boolean file_to_map(string file_to_load, aggregate map_to_fill, boolean compact)"
    ],
    documentation:
        "Loads data to the *map_to_fill* from a saved *file_to_load* in your KoLmafia's 'data' or 'scripts' directory. Any data originally " +
        "stored in *map_to_fill* is wiped before loading the file.",
});

addEntry({
    name: "find",
    signatures: [
        "boolean find(matcher pattern)"
    ],
    documentation:
        "Finds the next instance of *pattern* or returns false if no more matches exist. Note that a single instance of a pattern " +
        "may contain any number of capturing groups.",
});

addEntry({
    name: "floor",
    signatures: [
        "int floor(float number)"
    ],
    documentation:
        "Mathematical floor function. Returns the largest integer less than or equal to the supplied *number*.",
});

addEntry({
    name: "florist_available",
    signatures: [
        "boolean florist_available()"
    ],
    documentation:
        "Returns boolean indicating the availability of The Florist Friar's Cottage.",
});

addEntry({
    name: "form_field",
    signatures: [
        "string form_field(string value)"
    ],
    documentation:
        "Returns the *value* attribute of a previously-submitted input tag. Used to read form information in User Interface Scripts.",
});

addEntry({
    name: "form_fields",
    signatures: [
        "string [string] form_fields()"
    ],
    documentation:
        "Used in User Interface Scripts. See wiki for more details."
});

addEntry({
    name: "format_date_time",
    signatures: [
        "string format_date_time(string inFormat, string dtg, string outFormat)"
    ],
    documentation:
        "Formats a string representing a DateTime. See wiki page for more details.",
});

addEntry({
    name: "friars_available",
    signatures: [
        "boolean friars_available()"
    ],
    documentation:
        "Returns boolean indicating whether your character has completed the Deep Fat Friars quest.",
});

addEntry({
    name: "fullness_limit",
    signatures: [
        "int fullness_limit()"
    ],
    documentation:
        "Returns the character's maximum fullness level. Takes into account things like Feast of Boris and Stomach of Steel.",
});

addEntry({
    name: "galaktik_cures_discounted",
    signatures: [
        "boolean galaktik_cures_discounted()"
    ],
    documentation:
        "Returns true if the character has completed Doc Galatik's Quest for Herbs during this ascension. Otherwise return false.",
});

addEntry({
    name: "gameday_to_int",
    signatures: [
        "int gameday_to_int()"
    ],
    documentation:
        "Returns the current KoL game date using the in-game calendar as an integer from 0 to 95 where 'Jarlsuary 1' is 0 and " +
        "'Dougtember 8' is 95.",
});

addEntry({
    name: "gameday_to_string",
    signatures: [
        "string gameday_to_string()"
    ],
    documentation:
        "Returns the current KoL game date, where rollover is the start of a new day, using the in-game calendar.",
});

addEntry({
    name: "gametime_to_int",
    signatures: [
        "int gametime_to_int()"
    ],
    documentation:
        "Returns the current KoL game time using milliseconds since rollover.",
});

addEntry({
    name: "get_all_properties()",
    signatures: [
        "boolean [string] get_all_properties(string filter, boolean global)"
    ],
    documentation:
        "Returns a map from name to boolean which is true if the property is supported by KoLmafia itself or false if it's for/by user scripts.",
});

addEntry({
    name: "get_auto_attack",
    signatures: [
        "int get_auto_attack()"
    ],
    documentation:
        "Returns your auto-attack as an integer code. Possible values are 0 for ddisabled, 1 for atack with weapon, a skill ID number, or a " +
        "macro ID number preceded by 99.",
});

addEntry({
    name: "get_campground",
    signatures: [
        "int [item] get_campground()"
    ],
    documentation:
        "Returns a map of your campground items as integers, keyed by item names.",
});

addEntry({
    name: "get_css_action",
    signatures: [
        "string get_css_action(int round)"
    ],
    documentation:
        "This function will read a line from the active CCS for a given round and return that round's command as a string. " +
        "This will only return a value from the section of the CSS for the monster that is currently being fought. It is only useful in " +
        "consult scripts or combat filters.",
});

addEntry({
    name: "get_chateau",
    signatures: [
        "int [item] get_chateau()"
    ],
    documentation:
        "Returns a map of your chateau items as integers, keyed by item names.",
});

addEntry({
    name: "get_clan_id",
    signatures: [
        "int get_clan_id()"
    ],
    documentation:
        "Returns the clan ID of the character.",
});

addEntry({
    name: "get_clan_lounge",
    signatures: [
        "int [item] get_clan_lounge()"
    ],
    documentation:
        "Returns a map of your CLan VIP Lounge items as integers, keyed by item names. Also returns Speakeasy items that can " +
        "be purchased, and the item and number of Floundry items that can be made. Does **not** report Hot Dogs.",
});

addEntry({
    name: "get_clan_name",
    signatures: [
        "string get_clan_name()"
    ],
    documentation:
        "Returns the character's clan name.",
});

addEntry({
    name: "get_counters",
    signatures: [
        "string get_counters(string label, int minTurns, int maxTurns)"
    ],
    documentation:
        "Determines if a counter will expire in the specified period of time. Returns an empty string if there are no matching " +
        "counter, the counter name if there is only one match, or a tab-delimited list of names if there are multiple matches.",
});

addEntry({
    name: "get_custom_outfits",
    signatures: [
        "string [int] get_custom_outfits()"
    ],
    documentation:
        "Returns a list of all currently defined custom outfits. This list begins with '- No Change-', which is not really an outfit.",
});

addEntry({
    name: "get_dwelling",
    signatures: [
        "item get_dwelling()"
    ],
    documentation:
        "Returns the item corresponding with your current dwelling (the item used to get the dwelling). If you have no dwelling, " +
        "this function will return *$item[big rock]*.",
});

addEntry({
    name: "get_florist_plants",
    signatures: [
        "string [location] [int] get_florist_plants()"
    ],
    documentation:
        "Returns a map of all plants currently planted at each location in The_Florist_Friar's_Cottage.",
});

addEntry({
    name: "get_goals",
    signatures: [
        "string [int] get_goals()"
    ],
    documentation:
        "Returns an integer-indexed map of all active adventuring goals that have not yet been met.",
});

addEntry({
    name: "get_ignore_zone_warnings",
    signatures: [
        "boolean get_ignore_zone_warnings()"
    ],
    documentation:
        "Returns the value of the KoL option to disable the 'This area might be too tough for you' warnings. If KoL ignores those " +
        "that requirements warnings, then this returns true.",
});

addEntry({
    name: "get_ingredients",
    signatures: [
        "int [item] get_ingredients(item parse_me)"
    ],
    documentation:
        "Returns a map keyed by item names with the values equal to the quantity of each ingredient required to make *parse_me*. Note " +
        "that for multi-stage crafting, only the last stage of requirements is listed.",
});

addEntry({
    name: "get_inventory",
    signatures: [
        "int [item] get_inventory()"
    ],
    documentation:
        "Returns a map where each key is an item in your inventory, an the integer value its quantity.",
});

addEntry({
    name: "get_monsters",
    signatures: [
        "monster [int] get_monsters(location loc)"
    ],
    documentation:
        "Returns a map of every monster in the given location *loc*. Be aware that this also includes monsters that result from choice " +
        "adventures.",
});

addEntry({
    name: "get_moods",
    signatures: [
        "string [int] get_moods()"
    ],
    documentation:
        "Returns an integer indexed list of all currently defined mood names.",
});

addEntry({
    name: "get_outfits",
    signatures: [
        "string [int] get_outfits()"
    ],
    documentation:
        "Returns a list of all KoL outfits that the character currently owns and can wear. This list includes '- No Change -', " +
        "'Birthday Suit', and 'Your Previous Outfit' even though they aren't exactly KoL outfits.",
});

addEntry({
    name: "get_path",
    signatures: [
        "string get_path()"
    ],
    documentation:
        "When called by a relay override script, this returns the page name of the URL that was submitted in the relay browser. This " +
        "does not include any variables which might follow a question mark in the URL.",
});

addEntry({
    name: "get_path_full",
    signatures: [
        "string get_path_full()"
    ],
    documentation:
        "When called by a relay override script, this returns the full URL that was submitted in the relay browser.",
});

addEntry({
    name: "get_path_variables",
    signatures: [
        "string get_path_variables()"
    ],
    documentation:
        "When called by a relay override script, this returns the variables (if there are any after a '?') of the URL that was submitted " +
        "in the relay browser. This return value does not include the name of the page.",
});

addEntry({
    name: "get_player_id",
    signatures: [
        "string get_player_id(string player)"
    ],
    documentation:
        "Returns the user id number of a given player.",
});

addEntry({
    name: "get_power",
    signatures: [
        "int get_power(item it)"
    ],
    documentation:
        "Returns the power of the given item *it* or 0 if the item doesn't have a power.",
});

addEntry({
    name: "get_property",
    signatures: [
        "string get_property(string prop)",
        "string get_property(string prop, boolean global)"
    ],
    documentation:
        "Looks for a global or appropriate user preference from the saved files (found in your 'Settings' directory) and if it finds one " +
        "that matches, it returns whatever value is stored for that preference. If no matching preference is found, an empty string " +
        "is returned.",
});

addEntry({
    name: "get_related",
    signatures: [
        "int [item] get_related(item doodad, string type)"
    ],
    documentation:
        "Retrieves some variable-length internal data that isn't readily readable via *file_to_map()*. The *type* parameter is one of " +
        "'zap', 'fold', or 'pulverize'.",
});

addEntry({
    name: "get_revision",
    signatures: [
        "int get_revision()"
    ],
    documentation:
        "Returns the revision number of KoLmafia being used. For daily builds, the revision number is identical to the build number.",
});

addEntry({
    name: "get_shop",
    signatures: [
        "int [item] get_shop()"
    ],
    documentation:
        "Returns a map where each key is an item in your Mall store, with the integer value how many you are currently selling.",
});

addEntry({
    name: "get_storage",
    signatures: [
        "int [item] get_storage()"
    ],
    documentation:
        "Returns a map where each key is an item in Hangk's, with the integer value its quantity.",
});

addEntry({
    name: "get_version",
    signatures: [
        "string get_version()"
    ],
    documentation:
        "Returns the latest version of KoLmafia pertaining to your current build.",
});

addEntry({
    name: "gnomads_available",
    signatures: [
        "boolean gnomads_available()"
    ],
    documentation:
        "Returns true if your character has access to the Gnomish Gnomad Camp.",
});

addEntry({
    name: "goal_exists",
    signatures: [
        "boolean goal_exists(string type)"
    ],
    documentation:
        "Returns true if there are any goals that match *type*. See wiki page for valid values for the *type* parameter.",
});

addEntry({
    name: "group",
    signatures: [
        "string group(matcher pattern)",
        "string group(matcher pattern, int group)"
    ],
    documentation:
        "Returns the contents of an indicated capturing group or the entire pattern if not indicated. If the match was successful but " +
        "the group specified failed to match any part of the input sequence, then the null string is returned. A group may match an empty " +
        "string, so remember the null string is \"\u0000\".",
});

addEntry({
    name: "group_count",
    signatures: [
        "int group_count(matcher pattern)"
    ],
    documentation:
        "Returns the number of capturing groups in the pattern. Group zero denotes the entire pattern by convention, but it is not included " +
        "in this count.",
});

addEntry({
    name: "group_string",
    signatures: [
        "string [int, int] group_string(string group_me, string group_by)"
    ],
    documentation:
        "Finds all (non-overlapping) matches of the regular expression *group_by* within the string *group_me*. A 2D array of " +
        "matching strings is returned.",
});

addEntry({
    name: "guild_store_available",
    signatures: [
        "boolean guild_store_available()"
    ],
    documentation:
        "Returns true if your character has unlocked their guild store. Returns false otherwise.",
});

addEntry({
    name: "have_bartender",
    signatures: [
        "boolean have_bartender()"
    ],
    documentation:
        "Returns true if you have a bartender (regular or clockwork) installed at your campground, and false otherwise.",
});

addEntry({
    name: "have_chef",
    signatures: [
        "boolean have_chef()"
    ],
    documentation:
        "Returns true if you have a chef (regular or clockwork) installed at your caampground, and false otherwise.",
});

addEntry({
    name: "have_display",
    signatures: [
        "boolean have_display()"
    ],
    documentation:
        "Returns boolean indicating whether or not you've bought a display case.",
});

addEntry({
    name: "have_effect",
    signatures: [
        "int have_effect(effect have_effect)"
    ],
    documentation:
        "Returns the number of turns for which you currently have the effect *have_effect*. Returns 0 if you do not have any turns " +
        "of it. If the effect is an intrinsic that you currently have, the function will return 2147483547.",
});

addEntry({
    name: "have_equipped",
    signatures: [
        "boolean have_equipped(item check)"
    ],
    documentation:
        "Returns true if you currently have the specified item *check* equipped, and false otherwise. For familiar equipment, it only " +
        "checks the familiar you currently have with you. Always returns false if *check* is not an item that can be equipped.",
});

addEntry({
    name: "have_familiar",
    signatures: [
        "boolean have_familiar(familiar check_me)"
    ],
    documentation:
        "Returns true if you have the specified familiar, and false otherwise. This function does not detect hatchlings since those are " +
        "items. It will also not detect transformations due to wardrobe or doppleshifting.",
});

addEntry({
    name: "have_mushroom_plot",
    signatures: [
        "boolean have_mushroom_plot()"
    ],
    documentation:
        "Returns true if you have purchased a mushroom plot in Degrassi Knoll during your current ascension, and false if you have not.",
});

addEntry({
    name: "have_outfit",
    signatures: [
        "boolean have_outfit(string name)"
    ],
    documentation:
        "Returns boolean indicating whether you have all parts of the outfit *name* and meet all of the stat requirements to equip it. " +
        "*name* can be a default outfit or a custom outfit.",
});

addEntry({
    name: "have_servant",
    signatures: [
        "boolean have_servant(servant check_me)"
    ],
    documentation:
        "Returns true if you have the specified servant *check_me*, and false otherwise. Returns false if you are not in Ed the Undying.",
});

addEntry({
    name: "have_shop",
    signatures: [
        "boolean have_shop()"
    ],
    documentation:
        "Returns true if you have a mall store, and false otherwise.",
});

addEntry({
    name: "have_skill",
    signatures: [
        "boolean have_skill(skill check)"
    ],
    documentation:
        "Returns true if your character has the specified skill (permanent as applicable or bought in-run), and false otherwise.",
});

addEntry({
    name: "hermit",
    signatures: [
        "boolean hermit(int qty, item get)"
    ],
    documentation:
        "Attempts to acquire *qty* amount of item *get* from the hermit. Will buy and use chewing gum on a string as needed. Reports " +
        "success based on whether it acquired as many of item *get* as possible. If *get* is not a hermit item, this function " +
        "will return true.",
});

addEntry({
    name: "hidden_temple_unlocked",
    signatures: [
        "boolean hidden_temple_unlocked()"
    ],
    documentation:
        "Returns true if the character has successfully used the Spooky Map to discover the Hidden Temple, otherwise false.",
});

addEntry({
    name: "hippy_stone_broken",
    signatures: [
        "boolean hippy_stone_broken()"
    ],
    documentation:
        "Returns true if the Hippy Stone is currently broken, and false otherwise.",
});

addEntry({
    name: "hippy_store_available",
    signatures: [
        "boolean hippy_store_available()"
    ],
    documentation:
        "Returns true if the character has island access and has unlocked the hippy store. Otherwise it returns false.",
});

addEntry({
    name: "historical_age",
    signatures: [
        "float historical_age(item shop_for)"
    ],
    documentation:
        "Returns the age of the price that *historical_price()* will return. The return value is in days, so a returned value of " +
        "1.25 means that the price is 1 day and 6 hours old.",
});

addEntry({
    name: "historical_price",
    signatures: [
        "int historical_price(item shop_for)"
    ],
    documentation:
        "Returns the most recently seen mall price of the given item, following the same restrictions as *mall_price()*."
});

addEntry({
    name: "holiday",
    signatures: [
        "string holiday()"
    ],
    documentation:
        "Returns a string representation of the in-game holiday. Returns an empty string if there is currently no holiday.",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});

addEntry({
    name: "",
    signatures: [

    ],
    documentation:
        "",
});
