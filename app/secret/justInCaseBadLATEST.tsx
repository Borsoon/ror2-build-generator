"use client";

import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState({
    whites: 0,
    greens: 0,
    reds: 0,
    yellows: 0,
    blues: 0,
    oranges: false,
    purples: 0,
  });

  const [randomWhites, setRandomWhites] = useState({});
  const [randomGreens, setRandomGreens] = useState({});
  const [randomReds, setRandomReds] = useState({});
  const [randomYellows, setRandomYellows] = useState({});
  const [randomBlues, setRandomBlues] = useState({});
  const [randomOranges, setRandomOranges] = useState({});
  const [randomPurples, setRandomPurples] = useState({});

  const whiteItemsWithImages = {
    "Armor-Piercing Rounds": "https://ror2.nikurasu.org/img/bossDamage.jpg",
    "Backup Magazine": "https://ror2.nikurasu.org/img/backupMag.jpg",
    "Bundle of Fireworks": "https://ror2.nikurasu.org/img/steak.jpg",
    "Bustling Fungus": "https://ror2.nikurasu.org/img/fungus.jpg",
    "Cautious Slug": "https://ror2.nikurasu.org/img/slug.jpg",
    "Crowbar": "https://ror2.nikurasu.org/img/crowbar.jpg",
    "Delicate Watch": "https://ror2.nikurasu.org/img/brokenWatch.jpg",
    "Energy Drink": "https://ror2.nikurasu.org/img/drink.jpg",
    "Focus Crystal": "https://ror2.nikurasu.org/img/redCrystal.jpg",
    "Gasoline": "https://ror2.nikurasu.org/img/gasoline.jpg",
    "Lens-Maker's Glasses": "https://ror2.nikurasu.org/img/glasses.jpg",
    "Medkit": "https://ror2.nikurasu.org/img/medkit.jpg",
    "Mocha": "https://ror2.nikurasu.org/img/mocha.jpg",
    "Monster Tooth": "https://ror2.nikurasu.org/img/monsterTooth.jpg",
    "Oddly-shaped Opal": "https://ror2.nikurasu.org/img/opal.jpg",
    "Paul's Goat Hoof": "https://ror2.nikurasu.org/img/goat.jpg",
    "Personal Shield Generator": "https://ror2.nikurasu.org/img/shield.jpg",
    "Power Elixir": "https://ror2.nikurasu.org/img/elixir.jpg",
    "Repulsion Armor Plate": "https://ror2.nikurasu.org/img/armor.jpg",
    "Roll of Pennies": "https://ror2.nikurasu.org/img/pennies.jpg",
    "Rusted Key": "https://ror2.nikurasu.org/img/key.jpg",
    "Soldier's Syringe": "https://ror2.nikurasu.org/img/syringe.jpg",
    "Sticky Bomb": "https://ror2.nikurasu.org/img/stickyBomb.jpg",
    "Stun Grenade": "https://ror2.nikurasu.org/img/stunGrenade.jpg",
    "Topaz Brooch": "https://ror2.nikurasu.org/img/shieldBrooch.jpg",
    "Tougher Times": "https://ror2.nikurasu.org/img/bear.jpg",
    "Tri-Tip Dagger": "https://ror2.nikurasu.org/img/tritip.jpg",
    "Warbanner": "https://ror2.nikurasu.org/img/warbanner.jpg",
    }

    const greenItemsWithImages = {
    "AtG Missile Mk.": "https://ror2.nikurasu.org/img/missile_mk.jpg",
    "Bandolier": "https://ror2.nikurasu.org/img/bandolier.jpg",
    "Berzerker's Pauldron": "https://ror2.nikurasu.org/img/berzerk.jpg",
    "Chronobauble": "https://ror2.nikurasu.org/img/bauble.jpg",
    "Death Mark": "https://ror2.nikurasu.org/img/deathMark.jpg",
    "Fuel Cell": "https://ror2.nikurasu.org/img/cell.jpg",
    "Ghor's Tome": "https://ror2.nikurasu.org/img/goldBook.jpg",
    "Harvester's Scythe": "https://ror2.nikurasu.org/img/scythe.jpg",
    "Hopoo Feather": "https://ror2.nikurasu.org/img/feather.jpg",
    "Hunter's Harpoon": "https://ror2.nikurasu.org/img/harpoon.jpg",
    "Ignition Tank": "https://ror2.nikurasu.org/img/tank.jpg",
    "Infusion": "https://ror2.nikurasu.org/img/infusion.jpg",
    "Kjaro's Band": "https://ror2.nikurasu.org/img/fireRing.jpg",
    "Leeching Seed": "https://ror2.nikurasu.org/img/seed.jpg",
    "Lepton Daisy": "https://ror2.nikurasu.org/img/healFlower.jpg",
    "Old Guillotine": "https://ror2.nikurasu.org/img/guillotine.jpg",
    "Old War Stealthkit": "https://ror2.nikurasu.org/img/phasing.jpg",
    "Predatory Instincts": "https://ror2.nikurasu.org/img/hat.jpg",
    "Razorwire": "https://ror2.nikurasu.org/img/razorHeadband.jpg",
    "Red Whip": "https://ror2.nikurasu.org/img/whip.jpg",
    "Rose Buckler": "https://ror2.nikurasu.org/img/buckler.jpg",
    "Runald's Band": "https://ror2.nikurasu.org/img/iceRing.jpg",
    "Shipping Request Form": "https://ror2.nikurasu.org/img/form.jpg",
    "Shuriken": "https://ror2.nikurasu.org/img/shuriken.jpg",
    "Squid Polyp": "https://ror2.nikurasu.org/img/squidTurret.jpg",
    "Ukulele": "https://ror2.nikurasu.org/img/ukulele.jpg",
    "War Horn": "https://ror2.nikurasu.org/img/warHorn.jpg",
    "Wax Quail": "https://ror2.nikurasu.org/img/quail.jpg",
    "Will-o'-the-wisp": "https://ror2.nikurasu.org/img/wisp.jpg"
    };


    const redItemsWithImages = {
    "Leaf Clover": "https://ror2.nikurasu.org/img/clover.jpg",
    "Aegis": "https://ror2.nikurasu.org/img/fullBarrier.jpg",
    "Alien Head": "https://ror2.nikurasu.org/img/alien.jpg",
    "Ben's Raincoat": "https://ror2.nikurasu.org/img/rainCoat.jpg",
    "Bottled Chaos": "https://ror2.nikurasu.org/img/bottle.jpg",
    "Brainstalks": "https://ror2.nikurasu.org/img/brain.jpg",
    "Brilliant Behemoth": "https://ror2.nikurasu.org/img/behemoth.jpg",
    "Ceremonial Dagger": "https://ror2.nikurasu.org/img/dagger.jpg",
    "Defensive Microbots": "https://ror2.nikurasu.org/img/microbot.jpg",
    "Dio's Best Friend": "https://ror2.nikurasu.org/img/dio.jpg",
    "Frost Relic": "https://ror2.nikurasu.org/img/ice.jpg",
    "HEAD-ST vS": "https://ror2.nikurasu.org/img/cuffs.jpg",
    "Happiest Mask": "https://ror2.nikurasu.org/img/mask.jpg",
    "Hardlight Afterburner": "https://ror2.nikurasu.org/img/burner.jpg",
    "Interstellar Desk Plant": "https://ror2.nikurasu.org/img/deskPlant.jpg",
    "Laser Scope": "https://ror2.nikurasu.org/img/scope.jpg",
    "N'kuhana's Opinion": "https://ror2.nikurasu.org/img/opinion.jpg",
    "Pocket I.C.B.M.": "https://ror2.nikurasu.org/img/hugeMissile.jpg",
    "Rejuvenation Rack": "https://ror2.nikurasu.org/img/horn.jpg",
    "Resonance Disc": "https://ror2.nikurasu.org/img/disc.jpg",
    "Sentient Meat Hook": "https://ror2.nikurasu.org/img/hook.jpg",
    "Shattering Justice": "https://ror2.nikurasu.org/img/hammer.jpg",
    "Soulbound Catalyst": "https://ror2.nikurasu.org/img/soul.jpg",
    "Spare Drone Parts": "https://ror2.nikurasu.org/img/droneBox.jpg",
    "Symbiotic Scorpion": "https://ror2.nikurasu.org/img/scorpion.jpg",
    "Unstable Tesla Coil": "https://ror2.nikurasu.org/img/tesla.jpg",
    "Wake of Vultures": "https://ror2.nikurasu.org/img/headhunter.jpg"
    };

    const yellowItemsWithImages = {
        "Charged Perforator": "https://ror2.nikurasu.org/img/whiteHook.jpg",
        "Defense Nucleus": "https://ror2.nikurasu.org/img/triangleSummon.jpg",
        "Empathy Cores": "https://ror2.nikurasu.org/img/doubleDrone.jpg",
        "Genesis Loop": "https://ror2.nikurasu.org/img/weirdTail.jpg",
        "Halcyon Seed": "https://ror2.nikurasu.org/img/goldenSeed.jpg",
        "Irradiant Pearl": "https://ror2.nikurasu.org/img/shinyPearl.jpg",
        "Little Disciple": "https://ror2.nikurasu.org/img/sprintingWisp.jpg",
        "Mired Urn": "https://ror2.nikurasu.org/img/tarUrn.jpg",
        "Molten Perforator": "https://ror2.nikurasu.org/img/magmaTooth.jpg",
        "Pearl": "https://ror2.nikurasu.org/img/pearl.jpg",
        "Planula": "https://ror2.nikurasu.org/img/magmaEgg.jpg",
        "Queen's Gland": "https://ror2.nikurasu.org/img/beetle.jpg",
        "Shatterspleen": "https://ror2.nikurasu.org/img/critBleed.jpg",
        "Titanic Knurl": "https://ror2.nikurasu.org/img/knurl.jpg"
    };

    const blueItemsWithImages = {
        "Beads of Fealty": "https://ror2.nikurasu.org/img/beads.jpg",
        "Brittle Crown": "https://ror2.nikurasu.org/img/crown.jpg",
        "Corpsebloom": "https://ror2.nikurasu.org/img/flower.jpg",
        "Defiant Gouge": "https://ror2.nikurasu.org/img/tools.jpg",
        "Egocentrism": "https://ror2.nikurasu.org/img/whiteBall.jpg",
        "Essence of Heresy": "https://ror2.nikurasu.org/img/ocarina.jpg",
        "Eulogy Zero": "https://ror2.nikurasu.org/img/domino.jpg",
        "Focused Convergence": "https://ror2.nikurasu.org/img/orb.jpg",
        "Gesture of the Drowned": "https://ror2.nikurasu.org/img/fossil.jpg",
        "Hooks of Heresy": "https://ror2.nikurasu.org/img/purpleBlade.jpg",
        "Light Flux Pauldron": "https://ror2.nikurasu.org/img/coolJacket.jpg",
        "Mercurial Rachis": "https://ror2.nikurasu.org/img/spin.jpg",
        "Purity": "https://ror2.nikurasu.org/img/snowflake.jpg",
        "Shaped Glass": "https://ror2.nikurasu.org/img/sword.jpg",
        "Stone Flux Pauldron": "https://ror2.nikurasu.org/img/pauldron.jpg",
        "Strides of Heresy": "https://ror2.nikurasu.org/img/weirdArm.jpg",
        "Transcendence": "https://ror2.nikurasu.org/img/transc.jpg",
        "Visions of Heresy": "https://ror2.nikurasu.org/img/weirdOrb.jpg"
    };
    

    const blueOrangeItemsWithImages = {
        "Effigy of Grief": "https://ror2.nikurasu.org/img/slow.jpg",
        "Glowing Meteorite": "https://ror2.nikurasu.org/img/meteorite.jpg",
        "Helfire Tincture": "https://ror2.nikurasu.org/img/burn.jpg",
        "Spinel Tonic": "https://ror2.nikurasu.org/img/tonic.jpg"
    };

    const orangeItemsWithImages = {
        "Blast Shower": "https://ror2.nikurasu.org/img/potThing.jpg",
        "Disposable Missile Launcher": "https://ror2.nikurasu.org/img/missile.jpg",
        "Eccentric Vase": "https://ror2.nikurasu.org/img/vase.jpg",
        "Executive Card": "https://ror2.nikurasu.org/img/creditCard.jpg",
        "Foreign Fruit": "https://ror2.nikurasu.org/img/fruit.jpg",
        "Forgive Me Please": "https://ror2.nikurasu.org/img/voodoo.jpg",
        "Gnarled Woodsprite": "https://ror2.nikurasu.org/img/spirit.jpg",
        "Goobo Jr.": "https://ror2.nikurasu.org/img/goobo.jpg",
        "Gorag's Opus": "https://ror2.nikurasu.org/img/drum.jpg",
        "Jade Elephant": "https://ror2.nikurasu.org/img/elephant.jpg",
        "Milky Chrysalis": "https://ror2.nikurasu.org/img/larva.jpg",
        "Molotov (Six-Pack)": "https://ror2.nikurasu.org/img/molotov.jpg",
        "Ocular HUD": "https://ror2.nikurasu.org/img/hud.jpg",
        "Preon Accumulator": "https://ror2.nikurasu.org/img/beam.jpg",
        "Primordial Cube": "https://ror2.nikurasu.org/img/blackhole.jpg",
        "Radar Scanner": "https://ror2.nikurasu.org/img/radar.jpg",
        "Recycler": "https://ror2.nikurasu.org/img/recycler.jpg",
        "Remote Caffeinator": "https://ror2.nikurasu.org/img/fridge.jpg",
        "Royal Capacitor": "https://ror2.nikurasu.org/img/lightning.jpg",
        "Sawmerang": "https://ror2.nikurasu.org/img/metalSpin.jpg",
        "Super Massive Leech": "https://ror2.nikurasu.org/img/leech.jpg",
        "The Back-up": "https://ror2.nikurasu.org/img/drone.jpg",
        "The Crowdfunder": "https://ror2.nikurasu.org/img/gatling.jpg",
        "Trophy Hunter's Tricorn": "https://ror2.nikurasu.org/img/oldGun.jpg",
        "Volcanic Egg": "https://ror2.nikurasu.org/img/egg.jpg"
    };    

    const purpleItemsWithImages = {
        "Benthic Bloom": "https://ror2.nikurasu.org/img/corruptedClover.jpg",
        "Encrusted Key": "https://ror2.nikurasu.org/img/corruptedKey.jpg",
        "Lost Seer's Lenses": "https://ror2.nikurasu.org/img/corruptedGlasses.jpg",
        "Lysate Cell": "https://ror2.nikurasu.org/img/purpleCell.jpg",
        "Needletick": "https://ror2.nikurasu.org/img/needletick.jpg",
        "Newly Hatched Zoea": "https://ror2.nikurasu.org/img/corruptedScorpion.jpg",
        "Plasma Shrimp": "https://ror2.nikurasu.org/img/superMissile.jpg",
        "Pluripotent Larva": "https://ror2.nikurasu.org/img/hauntedBear.jpg",
        "Polylute": "https://ror2.nikurasu.org/img/corruptedThing.jpg",
        "Safer Spaces": "https://ror2.nikurasu.org/img/corruptedBear.jpg",
        "Singularity Band": "https://ror2.nikurasu.org/img/superRing.jpg",
        "Tentabauble": "https://ror2.nikurasu.org/img/plantTentacle.jpg",
        "Voidsent Flame": "https://ror2.nikurasu.org/img/flame.jpg",
        "Weeping Fungus": "https://ror2.nikurasu.org/img/weirdShroom.jpg"
    };
  function handleChange(event: any) {
    const { name, value, type, checked } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  }

  function getRandomItems(arr: string[], n: number) {
    const result: { [key: string]: number } = {};
    while (n--) {
      const item = arr[Math.floor(Math.random() * arr.length)];
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
    return result;
  }

   const handleSubmit = (event: any) => {
    event.preventDefault();

    const whitesCount = values.whites;
    const greensCount = values.greens;
    const redsCount = values.reds;
    const yellowsCount = values.yellows;

    const connectedOranges = Object.keys(orangeItemsWithImages).concat(Object.keys(blueOrangeItemsWithImages));
    let bluesCount = values.blues;
    const purplesCount = values.purples;

    const selectedWhites = getRandomItems(Object.keys(whiteItemsWithImages), whitesCount);
    const selectedGreens = getRandomItems(Object.keys(greenItemsWithImages), greensCount);
    const selectedReds = getRandomItems(Object.keys(redItemsWithImages), redsCount);
    const selectedYellows = getRandomItems(Object.keys(yellowItemsWithImages), yellowsCount);

    const selectedOranges = values.oranges ? getRandomItems(Object.keys(orangeItemsWithImages), 1) : {};

    const includesAny = (arr: any, values: any) => values.some((v: any) => arr.includes(v));

    if (bluesCount > 0 && values.oranges) {
      if (includesAny(Object.keys(selectedOranges), Object.keys(blueOrangeItemsWithImages))) {
        bluesCount--;
      }
    }

    const selectedBlues = getRandomItems(Object.keys(blueItemsWithImages), bluesCount);
    const selectedPurples = getRandomItems(Object.keys(purpleItemsWithImages), purplesCount);

    setRandomWhites(selectedWhites);
    setRandomGreens(selectedGreens);
    setRandomReds(selectedReds);
    setRandomYellows(selectedYellows);
    setRandomBlues(selectedBlues);
    setRandomOranges(selectedOranges);
    setRandomPurples(selectedPurples);
  };
  
  // I have no fucking idea what this interface

  interface ItemDisplayProps {
    items: Record<string, number>;
    itemImages: Record<string, string>;
    color: string;
  }
  
  const ItemDisplay: React.FC<ItemDisplayProps> = ({ items, itemImages, color }) => (
    <div>
      <h3 className="text-center">{`${color} Items:`}</h3>
      <div className="flex justify-center flex-row">
        {Object.entries(items).map(([itemName, count]) => (
          <div key={itemName}>
            <img
              src={itemImages[itemName as keyof typeof itemImages]}
              alt={itemName}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <span>{`x${count}`}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-[30px]">Ror2 random build generator</h1>
      <h4>If none then leave empty</h4>
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <label>
          Whites:{" "}
          <input
            className="text-black"
            type="number"
            name="whites"
            value={values.whites}
            onChange={handleChange}
          />
        </label>
        <label>
          Greens:{" "}
          <input
            className="text-black"
            type="number"
            name="greens"
            value={values.greens}
            onChange={handleChange}
          />
        </label>
        <label>
          Reds:{" "}
          <input
            className="text-black"
            type="number"
            name="reds"
            value={values.reds}
            onChange={handleChange}
          />
        </label>
        <label>
          Yellows:{" "}
          <input
            className="text-black"
            type="number"
            name="yellows"
            value={values.yellows}
            onChange={handleChange}
          />
        </label>
        <label>
          Blues:{" "}
          <input
            className="text-black"
            type="number"
            name="blues"
            value={values.blues}
            onChange={handleChange}
          />
        </label>
        <label>
          Purples:{" "}
          <input
            className="text-black"
            type="number"
            name="purples"
            value={values.purples}
            onChange={handleChange}
          />
        </label>
        <label>
          Oranges:{" "}
          <input
            className="text-black"
            type="checkbox"
            name="oranges"
            checked={values.oranges}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="bg-white text-black mt-4">
          Generate!
        </button>
      </form>

      <div>
        <ItemDisplay
          items={randomWhites}
          itemImages={whiteItemsWithImages}
          color="White"
        />
        <ItemDisplay
          items={randomGreens}
          itemImages={greenItemsWithImages}
          color="Green"
        />
        <ItemDisplay
          items={randomReds}
          itemImages={redItemsWithImages}
          color="Red"
        />
        <ItemDisplay
          items={randomYellows}
          itemImages={yellowItemsWithImages}
          color="Yellow"
        />
        <ItemDisplay
          items={randomBlues}
          itemImages={blueItemsWithImages}
          color="Blue"
        />
        <ItemDisplay
          items={randomPurples}
          itemImages={purpleItemsWithImages}
          color="Purple"
        />
        <ItemDisplay
          items={randomOranges}
          itemImages={orangeItemsWithImages}
          color="Orange"
        />
      </div>
    </div>
  );
}