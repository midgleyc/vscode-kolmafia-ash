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
        "Returns a boolean indicating if the character has unlocked the Black Market.",
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
        "Returns a boolean indicating whether your stats are high enough to equip the given item. Note that this function doesn't check " +
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
        "Returns a boolean indicating whether the character has access to Little Canadia",
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
        "Returns a boolean indicating whether or not the CLI command was executed properly.",
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
        "Returns a boolean indicating whether the plaayer has learned the password to the Knob Dispensary and possesses the Cobb's Knob lab key.",
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
        "Enthrones the specified familiar. Returns a boolean indicating whether the operation was successful.",
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
        "Attempts to equip the item *equip_me* in the slot *where* if specified. Returns a boolean indicating whether or not the " +
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
        "Returns a boolean indicating the availability of The Florist Friar's Cottage.",
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
        "Returns a boolean indicating whether your character has completed the Deep Fat Friars quest.",
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
        "Returns a boolean indicating whether or not you've bought a display case.",
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
        "Returns a boolean indicating whether you have all parts of the outfit *name* and meet all of the stat requirements to equip it. " +
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
    name: "image_to_monster",
    signatures: [
        "monster image_to_monster(string image)"
    ],
    documentation:
        "Returns the monster whose image name is *image*. If you go the other way and look up the image from the name of the monster " +
        "you can use the *monster.image* proxy field.",
});

addEntry({
    name: "in_bad_moon",
    signatures: [
        "boolean in_bad_moon()"
    ],
    documentation:
        "Returns true if you are under the Bad Moon sign, and false otherwise.",
});

addEntry({
    name: "in_hardcore",
    signatures: [
        "boolean in_hardcore()"
    ],
    documentation:
        "Returns true if the character is currently subject to Hardcore restrictions, and false otherwise.",
});

addEntry({
    name: "in_moxie_sign",
    signatures: [
        "boolean in_moxie_sign()"
    ],
    documentation:
        "Returns true if your moon sign gives a bonus to moxie stat gains, and false otherwise.",
});

addEntry({
    name: "in_muscle_sign",
    signatures: [
        "boolean in_muscle_sign()"
    ],
    documentation:
        "Returns true if your moon sign gives a bonus to muscle stat gains, and false otherwise.",
});
addEntry({

    name: "in_mysticality_sign",
    signatures: [
        "boolean in_mysticality_sign()"
    ],
    documentation:
        "Returns true if your moon sign gives a bonus to mysticality stat gains, and false otherwise.",
});

addEntry({
    name: "inaccessible_reason",
    signatures: [
        "string inaccessible_reason(coinmaster master)"
    ],
    documentation:
        "Returns a string explaining why *master* is currently unavailable. If *master* is available, then it returns an empty string.",
});

addEntry({
    name: "index_of",
    signatures: [
        "int index_of(string search, string find)",
        "int index_of(string search, string find, int start)"
    ],
    documentation:
        "Searches through the string *search*, looking for the string *find*. Returns the index where *find* first occurs in *search*, or " +
        "-1 if *find* was not found.",
});

addEntry({
    name: "inebriety_limit",
    signatures: [
        "int inebriety_limit()"
    ],
    documentation:
        "Returns the maximum safe drunkenness of a character before becoming falling-down drunk.",
});

addEntry({
    name: "initiative_modifier",
    signatures: [
        "float initiative_modifier()"
    ],
    documentation:
        "Returns your current percentage initiative modifier in the form of a float.",
});

addEntry({
    name: "insert",
    signatures: [
        "buffer insert(buffer original, int strStart, string stuff)"
    ],
    documentation:
        "Returns the buffer *original* with the string *stuff* inserted at index *strStart*.",
});

addEntry({
    name: "is_accessible",
    signatures: [
        "boolean is_accessible(coinmaster master)"
    ],
    documentation:
        "Returns a boolean indicating whether *master* is currently available.",
});

addEntry({
    name: "is_banished",
    signatures: [
        "boolean is_banished(monster mob)"
    ],
    documentation:
        "Returns true if the specific monster is currently banished, and false otherwise.",
});

addEntry({
    name: "is_coinmaster_item",
    signatures: [
        "boolean is_coinmaster_item(item it)"
    ],
    documentation:
        "Returns true if item *it* can be purchased from a coinmaster. You'll need to discover which coinmaster by checking the seller " +
        "proxy record.",
});

addEntry({
    name: "is_discardable",
    signatures: [
        "boolean is_discardable(item check_me)"
    ],
    documentation:
        "Returns a boolean indicating whether the specified item can be discarded. It will return true if the item can be autosold.",
});

addEntry({
    name: "is_displayable",
    signatures: [
        "boolean is_displayable(item check_me)"
    ],
    documentation:
        "Returns a boolean indicating whether the specified item can be put in a display case.",
});

addEntry({
    name: "is_familiar_equipment_locked",
    signatures: [
        "boolean is_familiar_equipment_locked()"
    ],
    documentation:
        "Returns true if familiar equipment is locked, and false otherwise.",
});

addEntry({
    name: "is_giftable",
    signatures: [
        "boolean is_giftable(item check_me)"
    ],
    documentation:
        "Returns a boolean indicating whether the item *check_me* can be sent as a gift. Note that this will return true for all items that are " +
        "not untraedable, not merely gift items. If you want to specifically know if an item is a gift item, then check the *gift.item* proxy record.",
});

addEntry({
    name: "is_integer",
    signatures: [
        "boolean is_integer(string check)"
    ],
    documentation:
        "Returns true if the given string consists of only digits and comma-separators, with a negative sign allowed as the first character.",
});

addEntry({
    name: "is_npc_item",
    signatures: [
        "boolean is_npc_item(item check)"
    ],
    documentation:
        "Returns a boolean indicating whether the given item can be bought from an NPC store.",
});

addEntry({
    name: "is_online",
    signatures: [
        "boolean is_online(string player)",
        "boolean is_online(int player_id)"
    ],
    documentation:
        "Returns a boolean indicating whether the specified player is online.",
});

addEntry({
    name: "is_tradeable",
    signatures: [
        "boolean is_tradeable(item check_me)"
    ],
    documentation:
        "Returns a boolean indicating whether the specified item can be traded via the Mall.",
});

addEntry({
    name: "is_trendy",
    signatures: [
        "boolean is_trendy(item thing)",
        "boolean is_trendy(familiar thing)",
        "boolean is_trendy(skill thing)",
        "boolean is_trendy(string thing)"
    ],
    documentation:
        "Checks to see if the *thing* is currently trendy (for use in the Trendy challenge path).",
});

addEntry({
    name: "is_unrestricted",
    signatures: [
        "boolean is_unrestricted(item check)",
        "boolean is_unrestricted(familiar check)",
        "boolean is_unrestricted(skill check)",
        "boolean is_unrestricted(string check)"
    ],
    documentation:
        "Returns a boolean indicating whether *check* is available for use, given current restrictions.",
});

addEntry({
    name: "is_wearing_outfit",
    signatures: [
        "boolean is_wearing_outfit(string name)"
    ],
    documentation:
        "Returns true if you are currently wearing all parts of the outfit *name*, and false otherwise.",
});

addEntry({
    name: "item_amount",
    signatures: [
        "int item_amount(item it)"
    ],
    documentation:
        "Returns the amount of an item you currently have in your inventory. Does **not** include equipped items, items in your Colossal " +
        "Closet, or Hangk's Storage.",
});

addEntry({
    name: "item_drop_modifier",
    signatures: [
        "float item_drop_modifier()"
    ],
    documentation:
        "Returns the peprcentage modification on item drops as a result of your equipment, effects, familiar, and area modifiers.",
});

addEntry({
    name: "item_drops",
    signatures: [
        "int [item] item_drops()",
        "int [item] item_drops(monster m)"
    ],
    documentation:
        "Returns a map of the monster's drop rates, indexed by item names.",
});

addEntry({
    name: "item_drops_array",
    signatures: [
        "record [int] item_drops_array()",
        "record [int] item_drops_array(monster check_me)"
    ],
    documentation:
        "Returns an array of records that contain information about item drops. See wiki page for more details.",
});

addEntry({
    name: "item_type",
    signatures: [
        "string item_type(item check_me)"
    ],
    documentation:
        "Returns the type of item that *check_me* is categorized as by KoLmafia. Possible values are all equipment types or other types " +
        "that KoLmafia has a programmed action that the item is associated with. See wiki page for more details.",
});

addEntry({
    name: "jump_chance",
    signatures: [
        "int [item] jump_chance()",
        "int [item] jump_chance(monster m)",
        "int [item] jump_chance(monster m, int i)",
        "int [item] jump_chance(monster m, int i, int ml)",
        "int [item] jump_chance(location l)"
    ],
    documentation:
        "Returns the chance of successfully getting the jump against the monster or in the location, optionally at a particular " +
        "initiative value and monster level.",
});

addEntry({
    name: "knoll_available",
    signatures: [
        "boolean knoll_available()"
    ],
    documentation:
        "Returns boolean indicating whether the character has access to the inside of Degrassi Knoll.",
});

addEntry({
    name: "last_choice",
    signatures: [
        "int last_choice()"
    ],
    documentation:
        "idk lol. Returns int indicating last choice you made in a choice adventure maybe?",
});

addEntry({
    name: "last_index_of",
    signatures: [
        "int last_index_of(string search, string find)",
        "int last_index_of(string search, string find, int end)"
    ],
    documentation:
        "Searches through the string *search*, looking for the string *find*. Returns the index position where *find* last occurs in " +
        "*search*.",
});

addEntry({
    name: "last_item_message",
    signatures: [
        "string last_item_message()"
    ],
    documentation:
        "Returns the message that KoL reported in the event of error when trying to use an item. If the last item use was successful, " +
        "then this will return an empty string.",
});

addEntry({
    name: "last_monster",
    signatures: [
        "monster last_monster()"
    ],
    documentation:
        "Returns the last monster encountered.",
});

addEntry({
    name: "last_skill_message",
    signatures: [
        "string last_skill_message()"
    ],
    documentation:
        "Returns the message that KoL reported in the event of error when trying to use a skill. If the last skill use was successful, then " +
        "this will return an empty string.",
});

addEntry({
    name: "length",
    signatures: [
        "int length(string count_me)"
    ],
    documentation:
        "Returns the number of characters in a string."
});

addEntry({
    name: "lightning_cost",
    signatures: [
        "int lightning_cost(skill lightning_skill)"
    ],
    documentation:
        "Returns the dB cost for the given Lightning skill.",
});

addEntry({
    name: "limit_mode",
    signatures: [
        "string limit_mode()"
    ],
    documentation:
        "Returns your curent limit mode, for example 'spellunk' or 'batman'. If you are not limited by a minigame, this returns " +
        "an empty string.",
});

addEntry({
    name: "load_html",
    signatures: [
        "buffer load_html(string page)"
    ],
    documentation:
        "Returns the HTML from the visited page by performing a POST request. See wiki page for more details.",
});

addEntry({
    name: "lock_familiar_equipment",
    signatures: [
        "void lock_familiar_equipment(boolean locking)"
    ],
    documentation:
        "Locks the familiar equipment is *locking* is true or unlocks it if *locking* if false.",
});

addEntry({
    name: "logprint",
    signatures: [
        "void logprint(string log)"
    ],
    documentation:
        "Adds the specified text *log* to your session log (prefixed with '> '). Useful for notes that you don't want cluttering " +
        "up the CLI or data to be parsed from your session log at a later time.",
});

addEntry({
    name: "make_url",
    signatures: [
        "buffer make_url(string page, boolean use_POST, boolean encoded)"
    ],
    documentation:
        "Returns the url that would be visited if this was a *visit_url()*. This function was intended for troubleshooting " +
        "crafted urls and has no use outside of debugging purposes.",
});

addEntry({
    name: "mall_price",
    signatures: [
        "int mall_price(item shop_for)"
    ],
    documentation:
        "Returns the current mall price of the given item, ignoring the first five items listed to compensate for stores with limits " +
        "and min-priced sales. See wiki page for more details.",
});

addEntry({
    name: "mana_cost_modifier",
    signatures: [
        "int mana_cost_modifier()"
    ],
    documentation:
        "Returns the total amount of passive MP cost reduction available.",
});

addEntry({
    name: "map_to_file",
    signatures: [
        "boolean map_to_file(aggregate map_to_save, string file_to_save)",
        "boolean map_to_file(aggregate map_to_save, string file_to_save, boolean compact)"
    ],
    documentation:
        "Saves the data in *map_to_save* to the *file_to_save* in your KoLmafia 'data' directory. See wiki page for more details.",
});

addEntry({
    name: "max",
    signatures: [
        "int max(int a, int b)",
        "float max(float a, float b)"
    ],
    documentation:
        "Mathematical maximum function. Returns the higher of the two parameters. Note that it is possible to mix an int and float type in the " +
        "parameters, in which case the int parameter will be transparently converted to a float, and the value returned will be of " +
        "float type.",
});

addEntry({
    name: "maximize",
    signatures: [
        "boolean maximize(string expression, boolean simulate)",
        "boolean maximize(string expression, int max_price, int price_level, boolean simulate)",
        "record [int] maximize(string expression, int max_price, int price_level, boolean simulate, boolean include_equip)"
    ],
    documentation:
        "Runs the modifier maximizer and returns true if successful, or a record including equipments and effects if the " +
        "*include_equip* parameter is specified. See wiki page for more details.",
});

addEntry({
    name: "meat_drop",
    signatures: [
        "int meat_drop(monster m)"
    ],
    documentation:
        "Returns the base meat drop of the specified monster.",
});

addEntry({
    name: "meat_drop_modifier",
    signatures: [
        "float meat_drop_modifier()"
    ],
    documentation:
        "Returns the percentage that you currently increase or decrease your meat drops as a result of equipment, effects, familiar, and " +
        "area modifiers.",
});

addEntry({
    name: "min",
    signatures: [
        "int min(int a, int b)",
        "float min(float a, float b)"
    ],
    documentation:
        "Mathematical minimum function. Returns the lower of the two parameters. Note that it is possible to mix an int and float type in the " +
        "parameters, in which case the int parameter will be transparently converted to a float, and the value returned will be of " +
        "float type.",
});

addEntry({
    name: "minstrel_instrument",
    signatures: [
        "item minstrel_instrument()"
    ],
    documentation:
        "If you are in the Avatar of Boris challenge path, this will return the item currently equipped on Boris' minstrel, Clancy. " +
        "Otherwise, this will return *$item[none]*.",
});

addEntry({
    name: "minstrel_level",
    signatures: [
        "int minstrel_level()"
    ],
    documentation:
        "If you are in the Avatar of Boris challenge path, then this will return the level of Boris' minstrel, Clancy. Otherwise, it " +
        "will return 0.",
});

addEntry({
    name: "minstrel_quest",
    signatures: [
        "boolean minstrel_quest()"
    ],
    documentation:
        "Returns true if you are in the Avatar of Boris challenge path and his minstrel, Clanacy, has a new quest available. Returns " +
        "false otherwise.",
});

addEntry({
    name: "modifier_eval",
    signatures: [
        "float modifier_eval(string expression)"
    ],
    documentation:
        "Evaluates an expression in the format used by variable modifiers. See wiki page for more details.",
});

addEntry({
    name: "monster_attack",
    signatures: [
        "int monster_attack()",
        "int monster_attack(monster check_me)"
    ],
    documentation:
        "Returns the attack value of the specified monster *check_me*. If *check_me* is not specified, it will use the current monster " +
        "if you are in a fight, or the last monster you encountered otherwise.",
});

addEntry({
    name: "monster_defense",
    signatures: [
        "int monster_defense()",
        "int monster_defense(monster check_me)"
    ],
    documentation:
        "Returns the defense value of the specified monster *check_me*. If *check_me* is not specified, it will use the current monster " +
        "if you are in a fight, or the last monster you encountered otherwise.",
});

addEntry({
    name: "monster_element",
    signatures: [
        "element monster_element()",
        "element monster_element(monster check_me)"
    ],
    documentation:
        "Returns the elemental alignment of the specified monster *check_me*. If *check_me* is not specified, it defaults to the last " +
        "monster you encountered.",
});

addEntry({
    name: "monster_eval",
    signatures: [
        "float monster_eval(string expression)"
    ],
    documentation:
        "Evaluates an expression in the format used by variable monsters. See wiki page for more details.",
});

addEntry({
    name: "monster_hp",
    signatures: [
        "int monster_hp()",
        "int monster_hp(monster check_me)"
    ],
    documentation:
        "Returns the defense value of the specified monster *check_me*. If *check_me* is not specified, it will return the HP of the current " +
        "monster if you are in a fight, or the HP of the last monster you encountered otherwise."
});

addEntry({
    name: "monster_initiative",
    signatures: [
        "int monster_initiative()",
        "int monster_initiative(monster check_me)"
    ],
    documentation:
        "Returns the initiative value of the specified monster *check_me*. If *check_me* is not specified, it will return the initiatve of the current " +
        "monster if you are in a fight, or the initiative of the last monster you encountered otherwise."
});

addEntry({
    name: "monster_level_adjustment",
    signatures: [
        "int monster_level_adjustment()"
    ],
    documentation:
        "Returns the cumulative total of all monster level adjustments from equipment, effects, and area modifiers.",
});

addEntry({
    name: "monster_phylum",
    signatures: [
        "phylum monster_phylum()",
        "phylum monster_phylum(monster check_me)"
    ],
    documentation:
        "Returns the phylum of the specified monster *check_me*. If *check_me* is not specified, it will return the phylum of the current " +
        "monster if you are in a fight, or the phylum of the last monster you encountered otherwise."
});

addEntry({
    name: "moon_light",
    signatures: [
        "int moon_light()"
    ],
    documentation:
        "Returns the total number of lit segments from all moons (including the minimoon). Range returned is 0 to 9.",
});

addEntry({
    name: "moon_phase",
    signatures: [
        "int moon_phase()"
    ],
    documentation:
        "Returns the moon phase, between 0 and 15. See wiki page for more details.",
});

addEntry({
    name: "mp_cost",
    signatures: [
        "int mp_cost(skill use_me)"
    ],
    documentation:
        "Returns the current MP cost for the next cast of the given skill with all current MP cost modifiers accounted for.",
});

addEntry({
    name: "my_adventures",
    signatures: [
        "int my_adventures()"
    ],
    documentation:
        "Returns the character's number of adventures remaining.",
});

addEntry({
    name: "my_ascensions",
    signatures: [
        "int my_ascensions()"
    ],
    documentation:
        "Returns the number of times your character has ascended.",
});

addEntry({
    name: "my_audience",
    signatures: [
        "int my_audience()"
    ],
    documentation:
        "If you are in the Avatar of Sneaky Pete challenge path, this will return the current value of your audience.",
});

addEntry({
    name: "my_basestat",
    signatures: [
        "int my_basestat(stat st)"
    ],
    documentation:
        "Returns the base (unbuffed) value of your character's specified stat. Note that this function also accepts " +
        "*$stat[submuscle]*, *$stat[submysticality]*, and *$stat[submoxie]* as parameters, in which case it will return the number " +
        "of substats.",
});

addEntry({
    name: "my_bjorned_familiar",
    signatures: [
        "familiar my_bjorned_familiar()"
    ],
    documentation:
        "Returns the familiar currently occupying Buddy Bjorn.",
});

addEntry({
    name: "my_buffedstat",
    signatures: [
        "int my_buffedstat(stat st)"
    ],
    documentation:
        "Returns the current buffed value of your character's specified stat. Passing " +
        "*$stat[submuscle]*, *$stat[submysticality]*, or *$stat[submoxie]* to this function will always return 0.",
});

addEntry({
    name: "my_class",
    signatures: [
        "class my_class()"
    ],
    documentation:
        "Returns your character's current class.",
});

addEntry({
    name: "my_closet_meat",
    signatures: [
        "int my_closet_meat()"
    ],
    documentation:
        "Returns the amount of meat stored in your Colossal Closet.",
});

addEntry({
    name: "my_companion",
    signatures: [
        "string my_companion()"
    ],
    documentation:
        "If your current path is Avatar of Jarlsberg this returns your current companion. If you have no current companion or you are " +
        "in that path, then this returns an empty string.",
});

addEntry({
    name: "my_daycount",
    signatures: [
        "int my_daycount()"
    ],
    documentation:
        "Returns the number of days since your character has started their current ascension.",
});

addEntry({
    name: "my_discomomentum",
    signatures: [
        "int my_discomomentum()"
    ],
    documentation:
        "Returns your current Disco Momentum level.",
});

addEntry({
    name: "my_effective_familiar",
    signatures: [
        "familiar my_effective_familiar()"
    ],
    documentation:
        "Returns the identity of your current familiar. If you have a Doppelshifter or a tiny costum wardrobe equipped, then the " +
        "return value will be the identity that your familiar assumed at the beginning of the current combat.",
});

addEntry({
    name: "my_effects",
    signatures: [
        "int [effect] my_effects()"
    ],
    documentation:
        "Returns a map of your character's current effects, with the values being their durations.",
});

addEntry({
    name: "my_enthroned_familiar",
    signatures: [
        "familiar my_enthroned_familiar()"
    ],
    documentation:
        "Returns the familiar currently enthroned (in the Crown of Thrones).",
});

addEntry({
    name: "my_familiar",
    signatures: [
        "familiar my_familiar()"
    ],
    documentation:
        "Returns your current familiar.",
});

addEntry({
    name: "my_fullness",
    signatures: [
        "int my_fullness()"
    ],
    documentation:
        "REturns the current fullness of your character.",
});

addEntry({
    name: "my_fury",
    signatures: [
        "int my_fury()"
    ],
    documentation:
        "Returns your current Fury level.",
});

addEntry({
    name: "my_hash",
    signatures: [
        "string my_hash()"
    ],
    documentation:
        "Returns the password hash used for your current login session.",
});

addEntry({
    name: "my_hp",
    signatures: [
        "int my_hp()"
    ],
    documentation:
        "Returns your current HP level.",
});

addEntry({
    name: "my_id",
    signatures: [
        "string my_id()"
    ],
    documentation:
        "Returns the Character ID of your character.",
});

addEntry({
    name: "my_inebriety",
    signatures: [
        "int my_inebriety()"
    ],
    documentation:
        "Returns your character's current level of drunkenness",
});

addEntry({
    name: "my_level",
    signatures: [
        "int my_level()"
    ],
    documentation:
        "Returns your character's level.",
});

addEntry({
    name: "my_lightning",
    signatures: [
        "int my_lightning()"
    ],
    documentation:
        "Returns your current bolts of Lightning.",
});

addEntry({
    name: "my_location",
    signatures: [
        "location my_location"
    ],
    documentation:
        "Returns your current location. If you are not in combat, this will typically be the location where you most recently adventured. " +
        "However, for a betweenBattleScript, it will be the location at which you are **about to** adventure.",
});

addEntry({
    name: "my_maxfury",
    signatures: [
        "int my_maxfury()"
    ],
    documentation:
        "Returns your maximum Fury level.",
});

addEntry({
    name: "my_maxhp",
    signatures: [
        "int my_maxhp()"
    ],
    documentation:
        "Returns your maximum HP level.",
});

addEntry({
    name: "my_maxmp",
    signatures: [
        "int my_maxmp()"
    ],
    documentation:
        "Returns your maximum MP level.",
});

addEntry({
    name: "my_meat",
    signatures: [
        "int my_meat()"
    ],
    documentation:
        "Returns the amount of meat you currently have in your inventory. Does not include meat you have in your Colossal Closet or " +
        "Hangk's storage.",
});

addEntry({
    name: "my_mp",
    signatures: [
        "int my_mp()"
    ],
    documentation:
        "Returns your current MP level.",
});

addEntry({
    name: "my_name",
    signatures: [
        "string my_name()"
    ],
    documentation:
        "Returns the name of your character **in all lowercase letters**.",
});

addEntry({
    name: "my_path",
    signatures: [
        "string my_path()"
    ],
    documentation:
        "Returns the name of your current ascension path. Returns \"none\" when in aftercore.",
});

addEntry({
    name: "my_primestat",
    signatures: [
        "stat my_primestat()"
    ],
    documentation:
        "Returns the stat associated with your class.",
});

addEntry({
    name: "my_rain",
    signatures: [
        "int my_rain()"
    ],
    documentation:
        "Returns your current drops of Rain.",
});

addEntry({
    name: "my_servant",
    signatures: [
        "servant my_servant(servant s)"
    ],
    documentation:
        "idk lol. I'm assuming returns current servant in Actually Ed the Undying? Don't know what the parameter is for.",
});

addEntry({
    name: "my_sign",
    signatures: [
        "string my_sign()"
    ],
    documentation:
        "Returns the moon sign your character chose upon ascension.",
});

addEntry({
    name: "my_soulsauce",
    signatures: [
        "int my_soulsauce()"
    ],
    documentation:
        "Returns your current Soulsauce.",
});

addEntry({
    name: "my_spleen_use",
    signatures: [
        "int my_spleen_use()"
    ],
    documentation:
        "Returns the number of spleen hits your character has taken this KoL day.",
});

addEntry({
    name: "my_storage_meat",
    signatures: [
        "int my_storage_meat()"
    ],
    documentation:
        "Returns the amount of meat stored in Hangk's.",
});

addEntry({
    name: "my_thrall",
    signatures: [
        "thrall my_thrall()"
    ],
    documentation:
        "Returns your current pasta thrall.",
});

addEntry({
    name: "my_thunder",
    signatures: [
        "int my_thunder()"
    ],
    documentation:
        "Returns your current dB of Thunder.",
});

addEntry({
    name: "my_turncount",
    signatures: [
        "int my_turncount()"
    ],
    documentation:
        "Returns the total number of adventures used thus far during your current ascension.",
});

addEntry({
    name: "now_to_string",
    signatures: [
        "string now_to_string(string format)"
    ],
    documentation:
        "Returns the current time (based on your computer's system settings) in SimpleDate format. See wiki page for more details.",
});

addEntry({
    name: "npc_price",
    signatures: [
        "int npc_price(item shop_for)"
    ],
    documentation:
        "Returns the current price of the given item from NPC shops, given availability to the player. If it is not available from an " +
        "NPC store or the store is not available, then it returns 0.",
});

addEntry({
    name: "numeric_modifier",
    signatures: [
        "float numeric_modifier(string modifier_name)",
        "float numeric_modifier(string check_me, string modifier_name)",
        "float numeric_modifier(item check_me, string modifier_name)",
        "float numeric_modifier(effect check_me, string modifier_name)",
        "float numeric_modifier(effect check_me, string modifier_name)",
        "float numeric_modifier(skill check_me, )",
    ],
    documentation:
        "Returns your current modifier total for *modifier_name*, or the amount of modification from *check_me* if it's specified. See " +
        "wiki page for more details.",
});


addEntry({
    name: "outfit",
    signatures: [
        "boolean outfit(string name)"
    ],
    documentation:
        "Attempts to put on the outfit specified by *name*, and returns true if it does so successfully, and false if it does not. It " +
        "will return false for any reason that you cannot put on the outfit including insufficient stats, not having the items, or even a " +
        "server timeout.",
});

addEntry({
    name: "outfit_pieces",
    signatures: [
        "item [int] outfit_pieces(string outfit)"
    ],
    documentation:
        "Returns an array of the items which compose an outfit. This works for both KoL standard outfits and custom outfits. If *outfit* " +
        "it invalid, then this wil return an empty aggregate.",
});

addEntry({
    name: "outfit_tattoo",
    signatures: [
        "string outfit_tattoo(string name)"
    ],
    documentation:
        "Returns image file name of outfit tatoo. If the outfit doesn't exist, it returns an empty string.",
});

addEntry({
    name: "overdrink",
    signatures: [
        "boolean overdrink(int qty, item consume)"
    ],
    documentation:
        "Attempts to drink *qty* amount of item *consume*. Returns true for drinkable items and false for items that are not. The return value " +
        "does not reflect whether or not the items were actually consumed. This function differs from *drink()* in that it suppresses warning " +
        "dialogs for overdrinking and drinking without Ode to Booze.",
});

addEntry({
    name: "print",
    signatures: [
        "void print(string message)",
        "void print(string message, string color)"
    ],
    documentation:
        "Prints a message to the CLI, with an optional color.",
});

addEntry({
    name: "print_html",
    signatures: [
        "void print_html(string html)"
    ],
    documentation:
        "Modified version of *print()* that allows you to format strings as if they were HTML. Font size, tables, font colors, etc. can " +
        "all be specified.",
});

addEntry({
    name: "property_default_value",
    signatures: [
        "string property_default_value(string prop)"
    ],
    documentation:
        "idk lol. Returns default value of the specified property, probably.",
});

addEntry({
    name: "property_exists",
    signatures: [
        "boolean property_exists(string prop)",
        "boolean property_exists(string prop, boolean global)"
    ],
    documentation:
        "idk lol. Returns boolean indicating whether the specified property exists, probably.",
});

addEntry({
    name: "property_has_default",
    signatures: [
        "boolean property_has_default(string prop)"
    ],
    documentation:
        "idk lol. Returns boolean indicating whether the specified property has a default value, probably.",
});

addEntry({
    name: "pulls_remaining",
    signatures: [
        "int pulls_remaining()"
    ],
    documentation:
        "Returns the number of Hangk pulls you have remaining for the day for characters in Ronin, 0 if you are in Hardcore, and -1 " +
        "otherwise.",
});

addEntry({
    name: "put_closet",
    signatures: [
        "boolean put_closet(int qty)",
        "boolean put_closet(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your main inventory into your Colossal Closet. The one-parameter version without *it* tries to move meat instead of " +
        "items. Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "put_display",
    signatures: [
        "boolean put_display(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your main inventory to your display case. Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "put_shop",
    signatures: [
        "boolean put_shop(int price, int limit, item it)",
        "boolean put_shop(int price, int limit, int qty, item it)"
    ],
    documentation:
        "Places items in your mall store. Returns true if placement is successful, and false otherwise. See wiki page for more details.",
});

addEntry({
    name: "put_stash",
    signatures: [
        "boolean put_stash(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your main inventory into your clan stash. Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "pvp_attacks_left",
    signatures: [
        "int pvp_attacks_left()"
    ],
    documentation:
        "Returns the number of PvP fights your character has remaining.",
});

addEntry({
    name: "rain_cost",
    signatures: [
        "int rain_cost(skill rain_skill)"
    ],
    documentation:
        "REturns the drop cost for the given Rain skill.",
});

addEntry({
    name: "random",
    signatures: [
        "int random(int range)"
    ],
    documentation:
        "Generates a random number, from a minimum of 0 to a maximum of *range*-1. Note that this function aborts with an error if you " +
        "supply 1 for *range*.",
});

addEntry({
    name: "raw_damage_absorption",
    signatures: [
        "int raw_damage_absorption()"
    ],
    documentation:
        "Returns the total damage absorption of your gear and effects.",
});

addEntry({
    name: "refresh_shop",
    signatures: [
        "void refresh_shop()"
    ],
    documentation:
        "Forces KoLmafia to re-check your mall store. This is useful because it's impossible for KoLmafia to internally track this.",
});

addEntry({
    name: "refresh_stash",
    signatures: [
        "void refresh_stash()"
    ],
    documentation:
        "Forces KoLmafia to re-check your clan stash. This is useful because it's impossible for KoLmafia to interally track this.",
});

addEntry({
    name: "refresh_status",
    signatures: [
        "void refresh_status()"
    ],
    documentation:
        "Refreshes your character's status from the character pane. This does not affect the relay browser, only KoLmafia's internal information.",
});

addEntry({
    name: "remove_item_condition",
    signatures: [
        "void remove_item_condition(int qty, item want)"
    ],
    documentation:
        "Removes *qty* of *want* from your current adventuring conditions.",
});

addEntry({
    name: "remove_property",
    signatures: [
        "void remove_property(string prop)",
        "void remove_property(string prop, boolean global)"
    ],
    documentation:
        "Removes a KoLmafia property. If *prop* is a built-in property, it gets reset to default instead.",
});

addEntry({
    name: "rename_property",
    signatures: [
        "boolean rename_property(string prop, string new_name)"
    ],
    documentation:
        "idk lol. Attempts to rename a KoLmafia property to something new, probably.",
});

addEntry({
    name: "replace",
    signatures: [
        "buffer replace(buffer original, int index1, int index2, string new)"
    ],
    documentation:
        "Replaces every character in *original* between indices *index1* and *index2* with *new* and returns the result. ",
});

addEntry({
    name: "replace_all",
    signatures: [
        "string replace_all(matcher pattern, string replacement)"
    ],
    documentation:
        "This function first resets the matcher *pattern*. It then scans the input sequence looking for matches of the pattern. Characters "  +
        "that are not part of any match are appended directly to the result string with each match replaced by the *replacement* string.",
});

addEntry({
    name: "replace_first",
    signatures: [
        "string replace_first(matcher pattern, string replacement)"
    ],
    documentation:
        "This function first resets the matcher *pattern*. It then scans the input sequence looking for a match of the pattern. Characters that " +
        "are not part of any match are appended directly to the result string with the first match replaced by the *replacement* string.",
});

addEntry({
    name: "replace_string",
    signatures: [
        "buffer replace_string(buffer original, string find, string replace)",
        "buffer replace_string(string original, string find, string replace)"
    ],
    documentation:
        "Searches through the supplied *original* text, replacing every instance of *find* with *replace*, and returns the result.",
});

addEntry({
    name: "reset",
    signatures: [
        "matcher reset(matcher pattern)",
        "matcher reset(matcher pattern, string input)"
    ],
    documentation:
        "Resets the matcher to search from beginning of string. If there is an *input* parameter, then that parameter is " +
        "the new string to search, otherwise it uses the original input string.",
});

addEntry({
    name: "restore_hp",
    signatures: [
        "boolean restore_hp(int target)"
    ],
    documentation:
       "Attempts to restore your HP to at least *target* using your current recovery settings (or KoLmafia's recovery settings as a fallback). " +
       "See wiki page for more details."
});

addEntry({
    name: "restore_mp",
    signatures: [
        "boolean restore_mp(int target)"
    ],
    documentation:
        "Attempts to restore your MP to at least *target* using your current recovery settings (or KoLmafia's recovery settings as a fallback). " +
        "See wiki page for more details."
});

addEntry({
    name: "retrieve_item",
    signatures: [
        "boolean retrieve_item(int qty, item get)"
    ],
    documentation:
        "Uses KoLmafia's internal logic to gather items in the least destructive manner. Returns true if the items are acquired as " +
        "specified, and false otherwise.",
});

addEntry({
    name: "round",
    signatures: [
        "int round(float number)"
    ],
    documentation:
        "Mathematical rounding function. Returns *number* rounded to the nearest whole number.",
});

addEntry({
    name: "run_choice",
    signatures: [
        "buffer run_choice(int choice)"
    ],
    documentation:
        "Proceeds to run a choice, selecting the provided choice number. Returns the HTML from the choice page. Most commonly used " +
        "to finish up choices started via *visit_url()*. See wiki page for more details.",
});

addEntry({
    name: "run_combat",
    signatures: [
        "buffer run_combat()",
        "buffer run_combat(string filter)"
    ],
    documentation:
        "Proceeds to run a combat using your current KoLmafia settings. Can optionally provide *filter*, which is a macro " +
        "or the name of a combat filter function. Returns the HTML from the final round of combat. See wiki page for more details.",
});

addEntry({
    name: "run_turn",
    signatures: [
        "buffer run_turn()"
    ],
    documentation:
        "Will work as *run_combat()* or *run_choice(-1)* depending on whether you are in a combat or a choice. Returns the HTML from the page " +
        "after the action completes.",
});

addEntry({
    name: "runaway",
    signatures: [
        "buffer runaway()"
    ],
    documentation:
        "Attempts to run away from combat during a consult script, and returns the HTML response text from said attempt.",
});

addEntry({
    name: "sell",
    signatures: [
        "boolean sell(coinmaster master, int qty, item it)"
    ],
    documentation:
        "Attempts to purchase *qty* amount of item *it* from *master*. Returns boolean indicating whether the purchase succeeded.",
});

addEntry({
    name: "sell_price",
    signatures: [
        "int sell_price(coinmaster master, item it)"
    ],
    documentation:
        "Returns the number of tokens that *master* will charge you if you want him to sell *it* to you.",
});

addEntry({
    name: "sells_item",
    signatures: [
        "boolean sells_item(coinmaster master, item it)"
    ],
    documentation:
        "Returns boolean indicating whether *master* sells *it*.",
});

addEntry({
    name: "session_logs",
    signatures: [
        "string [int] session_logs(int days)",
        "string [int] session_logs(string name, int days)"
    ],
    documentation:
        "Returns a map of your session log info, keyed by days from today. Will include as many days as supplied by *days*, using " +
        "the logs of the character specified by *name*.",
});

addEntry({
    name: "set_auto_attack",
    signatures: [
        "void set_auto_attack(int setting)",
        "void set_auto_attack(string setting)"
    ],
    documentation:
        "Sets your auto-attack to the specified *setting*.",
});

addEntry({
    name: "set_length",
    signatures: [
        "void set_length(buffer original, int length)"
    ],
    documentation:
        "Changes the size of the buffer. Primarily used to truncate the buffer. If the new length is longer than the old length, the " +
        "buffer will be padded with null characters. (Those characters can cause trouble, so this function is recommended to be used " +
        "only for truncating).",
});

addEntry({
    name: "set_location",
    signatures: [
        "void set_location(location place)"
    ],
    documentation:
        "Changes the value returned by *my_location()* to *place*. This is useful because it allows scripts which check current adventuring location " +
        "to provide results based on the location that you are *about to* adventure at.",
});

addEntry({
    name: "set_property",
    signatures: [
        "void set_property(string prop, string value)"
    ],
    documentation:
        "Looks for a global or appropriate user preference from the saved files (found in your 'Settings' directory) and if it finds one that " +
        "matches, it overrides its value with *value*. If no match is found, it will create a new property with the name and value.",
});

addEntry({
    name: "shop_amount",
    signatures: [
        "int shop_amount(item it)"
    ],
    documentation:
        "Returns the amount of the given item that is currently for sale in your mall store.",
});

addEntry({
    name: "shop_price",
    signatures: [
        "int shop_price(item it)"
    ],
    documentation:
        "Returns the price of the given item that is currently for sale in your mall store. If the item is not currently for sale " +
        "then 999999999 is returned.",
});

addEntry({
    name: "soulsauce_cost",
    signatures: [
        "int soulsauce_cost(skill use_me)"
    ],
    documentation:
        "Returns the amount of Soulsauce needed for the next cast of the given skill.",
});

addEntry({
    name: "spleen_limit",
    signatures: [
        "int spleen_limit()"
    ],
    documentation:
        "Returns the maximum spleen use possible for your character.",
});

addEntry({
    name: "split_string",
    signatures: [
        "string [int] split_string(string source)",
        "string [int] split_string(string source, string delimiter)"
    ],
    documentation:
        "Returns an array of your *source*, split by either *delimiter* or by line-breaks if not supplied.",
});

addEntry({
    name: "square_root",
    signatures: [
        "float square_root(float number)"
    ],
    documentation:
        "Returns the square root of the specified *number*. If an int type is supplied as an argument, it will be converted to a float.",
});

addEntry({
    name: "start",
    signatures: [
        "int start(matcher pattern)",
        "int start(matcher pattern, int group)"
    ],
    documentation:
        "Returns the starting index of the first character matched by the specified capturing group, or if no *group* is specified, it " +
        "returns the index of the last group found. If the match was successful, but the group did not match anything, then it returns -1.",
});

addEntry({
    name: "stash_amount",
    signatures: [
        "int stash_amount(item it)"
    ],
    documentation:
        "Returns the amount of the given item that are in your clan stash.",
});

addEntry({
    name: "stat_bonus_today",
    signatures: [
        "stat stat_bonus_today()"
    ],
    documentation:
        "Returns the stat that is benefited by the moon phases today. If it is an ordinary day with no stat benefits, the return " +
        "value is *$stat[none]*.",
});

addEntry({
    name: "stat_bonus_tomorrow",
    signatures: [
        "stat stat_bonus_tomorrow()"
    ],
    documentation:
        "Returns the stat that will benefit from the moon phases tomorrow. If it will be an ordinary day with no stat benefits, the " +
        "return value is *$stat[none]*.",
});

addEntry({
    name: "stat_modifier",
    signatures: [
        "stat stat_modifier(item check_me, string modifier_name)",
        "stat stat_modifier(string check_me, string modifier_name)"
    ],
    documentation:
        "Returns a stat of *check_me* is stat specific.",
});

addEntry({
    name: "steal",
    signatures: [
        "buffer steal()"
    ],
    documentation:
        "Attempts to pickpocket during a consult script, and returns the HTML response text from said attempt.",
});

addEntry({
    name: "stills_available",
    signatures: [
        "int stills_available()"
    ],
    documentation:
        "Returns the number of Nash Crosby's Still uses you have left for the day. This is 0 if you are not a moxie class. If you are a " +
        "moxie class, but have not opened the guild, this returns 10.",
});

addEntry({
    name: "storage_amount",
    signatures: [
        "int storage_amount(item it)"
    ],
    documentation:
        "Returns the amount of the given item that you have in storage at Hangk's.",
});

addEntry({
    name: "string_modifier",
    signatures: [
        "string string_modifier(string check_me)",
        "string string_modifier(string check_me, string modifier_name)"
    ],
    documentation:
        "Returns a string modifier. See wiki page for more details.",
});

addEntry({
    name: "stun_skill",
    signatures: [
        "skill stun_skill()"
    ],
    documentation:
        "Returns the skill the character class could use for stunning.",
});

addEntry({
    name: "substring",
    signatures: [
        "string substring(string full, int start)",
        "string substring(string full, int start, int end)"
    ],
    documentation:
        "This function returns a postion of *full*, starting at index *start*, and ending just before index *end*. If *end* is omitted, the remaining " +
        "of the string is returned.",
});

addEntry({
    name: "svn_at_head",
    signatures: [
        "boolean svn_at_head(string projectname)"
    ],
    documentation:
        "Returns true if *projectname* exists, is a valid working copy, and is currently at the same revision number as the repository. " +
        "Returns false otherwise. *projectname* will match any unique substring of any project in the /svn folder, but it is case-sensitive.",
});

addEntry({
    name: "svn_exists",
    signatures: [
        "boolean svn_exists(string projectname)"
    ],
    documentation:
        "Returns true if there is a valid working copy named *projectname* present in the /svn folder. *projectname* will match any " +
        "unique substring of any project in the /svn folder, but it is case-sensitive.",
});

addEntry({
    name: "svn_info",
    signatures: [
        "record svn_info(string projectname)"
    ],
    documentation:
        "Provides information about a given project. See wiki page for more details.",
});

addEntry({
    name: "take_closet",
    signatures: [
        "boolean take_closet(int qty)",
        "boolean take_closet(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your closet to your main inventory. If called without *it*, it will attempt to move meat. " +
        "Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "take_display",
    signatures: [
        "boolean take_display(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your display case to your main inventory. Returns a boolean indicating whether the " +
        "move was successful.",
});

addEntry({
    name: "take_shop",
    signatures: [
        "boolean take_shop(item it)",
        "boolean take_shop(int qty, item it)"
    ],
    documentation:
        "Removes *it* from your mall store. Returns a boolean indicating whether the operation was successful.",
});

addEntry({
    name: "take_stash",
    signatures: [
        "boolean take_stash(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from your clan stash to your main inventory. Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "take_storage",
    signatures: [
        "boolean take_storage(int qty, item it)"
    ],
    documentation:
        "Attempts to move *qty* of *it* from Hangk's Storage to your main inventory. This can also retrieve an item that is a free pull. " +
        "Returns a boolean indicating whether the move was successful.",
});

addEntry({
    name: "tavern",
    signatures: [
        "int tavern()",
        "int tavern(string target)"
    ],
    documentation:
        "Attempts to complete the level 3 tavern quest, stopping when it has reached the optionally specified target. See wiki page " +
        "for valid targets. Returns value is based on the target.",
});

addEntry({
    name: "throw_item",
    signatures: [
        "buffer throw_item(item throw)"
    ],
    documentation:
        "Attempts to use an item during a combat round, and returns the HTML response from said attempt.",
});

addEntry({
    name: "throw_items",
    signatures: [
        "buffer throw_items(item first, item second)"
    ],
    documentation:
        "Attempts to use two items in a combat round (using the skill Ambidextrous Funkslinging), and returns the HTML response from said " +
        "attempt.",
});

addEntry({
    name: "thunder_cost",
    signatures: [
        "int thunder_cost(skill thunder_skill)"
    ],
    documentation:
        "Returns the dB cost for the given Thunder skill.",
});

addEntry({
    name: "time_to_string",
    signatures: [
        "string time_to_string()"
    ],
    documentation:
        "Returns the current local time (based on your computer's system settings) in HH:mm:ss z format.",
});

addEntry({
    name: "to_boolean",
    signatures: [
        "boolean to_boolean(int convert)",
        "boolean to_boolean(float convert)",
        "boolean to_boolean(string convert)",
    ],
    documentation:
        "Converts the supplied datatype *convert* to a boolean value. For strings, this means that it will return false for anything except " +
        "the string \"true\". For the other datatypes, it returns *to_int(anything) != 0*. See wiki page for more details.",
});

addEntry({
    name: "to_bounty",
    signatures: [
        "bounty to_bounty(string convert)"
    ],
    documentation:
        "Returns the bounty that corresponds to the specified parameter *convert*. This is not a fuzzy match and it is not case-sensitive.",
});

addEntry({
    name: "to_class",
    signatures: [
        "class to_class(int convert)",
        "class to_class(string name)"
    ],
    documentation:
        "Attempts to convert the parameter to a class type and returns the result.",
});

addEntry({
    name: "to_coinmaster",
    signatures: [
        "coinmaster to_coinmaster(string store)"
    ],
    documentation:
        "Attempts to convert the parameter *store* to a coinmaster type and returns the result.",
});

addEntry({
    name: "to_effect",
    signatures: [
        "effect to_effect(int convert)",
        "effect to_effect(string convert)",
        "effect to_effect(skill convert)",
    ],
    documentation:
        "When supplied an int or string, returns the effect that corresponds to the specified parameter *convert*. When supplied a skill, " +
        "returns the effect that is given when the skill *convert* is cast on a player.",
});

addEntry({
    name: "to_element",
    signatures: [
        "element to_element(string name)"
    ],
    documentation:
        "Attempts to convert the specified *name* to an element type and returns the result.",
});

addEntry({
    name: "to_familiar",
    signatures: [
        "familiar to_familiar(int convert)",
        "familiar to_familiar(string convert)"
    ],
    documentation:
        "Attempts the convert the parameter to a familiar type and returns the result.",
});

addEntry({
    name: "to_float",
    signatures: [
        "float to_float(boolean convert)",
        "float to_float(int convert)",
        "float to_float(string convert)",
    ],
    documentation:
        "Looks for the best float match to the specified input, and returns that match. See wiki page for more details.",
});

addEntry({
    name: "to_int",
    signatures: [
        "int to_int(boolean convert)",
        "int to_int(float convert)",
        "int to_int(string convert)",
        "int to_int(item convert)",
        "int to_int(class convert)",
    ],
    documentation:
        "Looks for the best integer match to the specified input, and returns that match. See wiki page for more details.",
});

addEntry({
    name: "to_item",
    signatures: [
        "item to_item(string name)",
        "item to_item(int id)",
        "item to_item(string name, int qty)",
    ],
    documentation:
        "Returns the item that matches *name* or *id* as specified. Plural names will not match unless the third form is used and " +
        "*qty* is not equal to 1.",
});

addEntry({
    name: "to_json",
    signatures: [
        "string to_json(aggregate input)"
    ],
    documentation:
        "Converts a simple map into a JSON string.",
});

addEntry({
    name: "to_location",
    signatures: [
        "location to_location(int convert)",
        "location to_location(string convert)",
    ],
    documentation:
        "Attempts to convert the given parameter into a location type and returns the result.",
});

addEntry({
    name: "to_lower_case",
    signatures: [
        "string to_lower_case(string text)"
    ],
    documentation:
        "Returns *text* with all alphabetic characters (A-Z) converted to lower-case.",
});

addEntry({
    name: "to_monster",
    signatures: [
        "monster to_monster(string name)",
        "monster to_monster(int id)"
    ],
    documentation:
        "Attempts to convert the given parameter into a monster type and returns the result.",
});

addEntry({
    name: "to_phylum",
    signatures: [
        "phylum to_phylum(string name)"
    ],
    documentation:
        "Converts the specific string *name* to a phylum type and returns the result.",
});

addEntry({
    name: "to_plural",
    signatures: [
        "string to_plural(item it)"
    ],
    documentation:
        "Returns the plural of an item in the form of a string.",
});

addEntry({
    name: "to_servant",
    signatures: [
        "servant to_servant(int id)",
        "servant to_servant(string name)"
    ],
    documentation:
        "idk lol. Attempts to convert the given parameter to a phylum type and returns the result, probably.",
});

addEntry({
    name: "to_skill",
    signatures: [
        "skill to_skill(int convert)",
        "skill to_skill(string convert)",
        "skill to_skill(effect convert)",
    ],
    documentation:
        "When supplied an int or string, returns the skill that corresponds to the specific parameter *convert*. When supplied an effect, " +
        "this returns the skill that, when cast on the player, gives them the effect *convert*.",
});

addEntry({
    name: "to_slot",
    signatures: [
        "slot to_slot(item equip)",
        "slot to_slot(string slot)"
    ],
    documentation:
        "When given an item, returns the slot(s) to which that item would be equipped. When given a string, attempts to convert " +
        "the string to a slot type and returns the result.",
});

addEntry({
    name: "to_stat",
    signatures: [
        "stat to_stat(string convert)"
    ],
    documentation:
        "Attempts to convert the given argument into a stat type and returns the result.",
});

addEntry({
    name: "to_string",
    signatures: [
        "string to_string(any anything)",
        "string to_string(num number, string format)"
    ],
    documentation:
        "Returns any datatype as its string equivalent. For numeric types (int and float), you can optionally specify a formatting string.",
});

addEntry({
    name: "to_thrall",
    signatures: [
        "thrall to_thrall(int convert)",
        "thrall to_thrall(string convert)"
    ],
    documentation:
        "Attempts to convert the given parameter into a thrall type, and returns the result.",
});

addEntry({
    name: "to_upper_case",
    signatures: [
        "string to_upper_case(string text)"
    ],
    documentation:
        "Returns *text* with all alphabetic characters (a-z) converted to upper-case.",
});

addEntry({
    name: "to_url",
    signatures: [
        "string to_url(location place)"
    ],
    documentation:
        "Returne the short url (normally of the form 'adventure.php?snarfblat=' used to visit the location *place*.",
});

addEntry({
    name: "today_to_string",
    signatures: [
        "string today_to_string()"
    ],
    documentation:
        "Returns the current real-world date corresponding to the KoL game date, where rollover is the start of a new day. Returned string " +
        "is in an ISO basic format (YYYYMMDD).",
});

addEntry({
    name: "total_free_rests",
    signatures: [
        "int total_free_rests()"
    ],
    documentation:
        "Returns the total number of free rests available to your character. Does **not** account for free rests that you have used " +
        "(i.e. it does **not** return the remaining number of free rests).",
});

addEntry({
    name: "total_turns_played",
    signatures: [
        "int total_turns_played()"
    ],
    documentation:
        "Returns the total number of adventures used by your character since it was created.",
});

addEntry({
    name: "truncate",
    signatures: [
        "int truncate(float number)"
    ],
    documentation:
        "Mathematical truncate function. Returns the truncated integer version of *number* (that is to say everything after the " +
        "decimal point is stripped away and ignored completely).",
});

addEntry({
    name: "turns_per_cast",
    signatures: [
        "int turns_per_cast(skill check_me)"
    ],
    documentation:
        "Returns the number of turns of its corresponding effect you would get when casting *check_me* a single time.",
});

addEntry({
    name: "turns_played",
    signatures: [
        "int turns_played()"
    ],
    documentation:
        "Returns the total number of adventures used so far by your character during your current ascension.",
});

addEntry({
    name: "url_decode",
    signatures: [
        "string url_decode(string source)"
    ],
    documentation:
        "Returns the 'normal' version of the supplied *source* string with all URI-encoded escape sequences replaced with " +
        "non-alphanumeric characters.",
});

addEntry({
    name: "url_encode",
    signatures: [
        "string url_encode(string source)"
    ],
    documentation:
        "Returns the encoded version of the supplied *source* string with all non-alphanumeric characters replaced with the standard " +
        "URI-encoded escape sequences.",
});

addEntry({
    name: "use",
    signatures: [
        "boolean use(int qty, item it)"
    ],
    documentation:
        "Attempts to use *qty* amount of item *it*. REturns true if the item is used or false if it fails to do so. This function " +
        "should **not** be used for eating, drinking, or chewing spleen items. (See *eat()*, *drink()*, and *chew()* instead).",
});

addEntry({
    name: "use_familiar",
    signatures: [
        "boolean use_familiar(familiar buddy)"
    ],
    documentation:
        "Switches your current familiar for the specified one. Returns true if the specified familiar *buddy* is your current familiar " +
        "after the function's completion (i.e. returns true if successful), and false otherwise.",
});

addEntry({
    name: "use_servant",
    signatures: [
        "boolean use_servant(servant buddy)"
    ],
    documentation:
        "idk lol. Probably: In the Actually Ed the Undying challenge path, switches your current servant for the specified one. " +
        "Returns true if the specified servant *buddy* is your current servant " +
        "after the function's completion (i.e. returns true if successful), and false otherwise.",
});

addEntry({
    name: "use_skill",
    signatures: [
        "boolean use_skill(int casts, skill to_use)",
        "boolean use_skill(int casts, skill to_use, string target)"
    ],
    documentation:
        "Attempts to cast the skill *to_use* a number of times specified by *casts*, or once if not specified. Can optionally " +
        "specify a cast target, otherwise it defaults to your own character.",
});

addEntry({
    name: "user_confirm",
    signatures: [
        "boolean user_confirm(string message)",
        "boolean user_confirm(string message, int timeOutMillis, boolean defaultValue)"
    ],
    documentation:
        "Presents user with a pop-up dialog box with the text in *message* and two buttons: 'Yes' and 'No'. Returns true if the user " +
        "selects 'Yes' and false if the user selects 'No'. You can optionally supply a time out and a default return value.",
});

addEntry({
    name: "visit",
    signatures: [
        "boolean visit(coinmaster master)"
    ],
    documentation:
        "Visits a coinmaster to see what is currently for sale there. This is useful for coinmasters whose inventory maay change, such as " +
        "the Hermit, Mr. Store, and the Traveling Trader. Returns true if the visit was successful and false otherwise.",
});

addEntry({
    name: "visit_url",
    signatures: [
        "buffer visit_url()",
        "buffer visit_url(string page)",
        "buffer visit_url(string page, boolean use_POST)",
        "buffer visit_url(string page, boolean use_POST, boolean encoded)",
    ],
    documentation:
        "Returns the HTML from the visited page by performing a POST request if *use_POST* is omitted or true, or a GET request if false. " +
        "See wiki page for more details.",
});

addEntry({
    name: "wait",
    signatures: [
        "void wait(int secs)"
    ],
    documentation:
        "Pauses script execution for *secs* seconds. Minimum wait is 1 second, even if *secs* is 0.",
});

addEntry({
    name: "waitq",
    signatures: [
        "void waitq(int secs)"
    ],
    documentation:
        "Pauses script execution for *secs* seconds. This differs from *wait()* because it does not print a countdown to KoLmafia's " +
        "graphical CLI. Minimum wait is 1 second, even if *secs* is 0.",
});

addEntry({
    name: "weapon_hands",
    signatures: [
        "int weapon_hands(item check_me)"
    ],
    documentation:
        "Returns the number of hands required to wield a weapon. Everything else, including off-hand items, returns 0.",
});

addEntry({
    name: "weapon_type",
    signatures: [
        "stat weapon_type(item check_me)"
    ],
    documentation:
        "Returns the equip requirement stat for *check_me*, even if the weapon does not have any stat requirements. If " +
        "*check_me* is not a weapon, this function returns *$stat[none]*.",
});

addEntry({
    name: "weight_adjustment",
    signatures: [
        "int weight_adjustment()"
    ],
    documentation:
        "Returns the cumulative total of all familiar weight adjustments from equipment, effects, skills, and area modifiers.",
});

addEntry({
    name: "white_citadel_available",
    signatures: [
        "boolean white_citadel_available()"
    ],
    documentation:
        "Returns a boolean indicating whether your character has completed the White Citadel Quest and unlocked The White Citadel.",
});

addEntry({
    name: "who_clan",
    signatures: [
        "boolean [string] who_clan()"
    ],
    documentation:
        "Returns a map of the names of all players in clan chat. The boolean values are true if the character is in clan chat or false " +
        "if just listening.",
});

addEntry({
    name: "will_usually_dodge",
    signatures: [
        "boolean will_usually_dodge()"
    ],
    documentation:
        "Returns true if your character would dodge an attack from your opponent more than half the time, and false otherwise. This " +
        "uses the current monster being fought if in a consult script, otherwise it uses the last monster encountered."
});

addEntry({
    name: "will_usually_miss",
    signatures: [
        "boolean will_usually_miss()"
    ],
    documentation:
        "Returns true if your character would connect (hit your opponent) less than half the time when attacking with your weapon, and " +
        "false otherwise. This uses the current monster being fought if in a consult script, otherwise it uses the last monster encountered."
});

addEntry({
    name: "write",
    signatures: [
        "void write(string text)"
    ],
    documentation:
        "Prints the specified *text* to the source of the page to be displayed by a relay browser script.",
});

addEntry({
    name: "writeIn",
    signatures: [
        "void writeIn(string text)"
    ],
    documentation:
        "Prints the specified *text* to the source of the page to be displayed by a relay browser script, ending with a line break " +
        "(in the source, not necessarily in how the text is displayed).",
});

addEntry({
    name: "xpath",
    signatures: [
        "string[int] xpath(string htmldocument, string xpathselector)"
    ],
    documentation:
        "Returns an array of strings (not a map for efficiency purposes) representing the node(s) which xpath has selected for you in the " +
        "html document. See wiki page for more details.",
});
