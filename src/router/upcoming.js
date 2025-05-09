const express = require("express");
const router = express.Router();
const puppeteer = require('puppeteer');




const urls1 = [
	{
		"title": "Fight or Flight (2024)",
		"url": "https://www.imdb.com/title/tt13652286/?ref_=rlm"
	},
	{
		"title": "Clown in a Cornfield (2025)",
		"url": "https://www.imdb.com/title/tt23060698/?ref_=rlm"
	},
	{
		"title": "Friendship (2024)",
		"url": "https://www.imdb.com/title/tt30505698/?ref_=rlm"
	},
	{
		"title": "Shadow Force (2025)",
		"url": "https://www.imdb.com/title/tt11092020/?ref_=rlm"
	},
	{
		"title": "Juliet & Romeo (2025)",
		"url": "https://www.imdb.com/title/tt26597666/?ref_=rlm"
	},
	{
		"title": "The Lightning Code (2025)",
		"url": "https://www.imdb.com/title/tt16310582/?ref_=rlm"
	},
	{
		"title": "Sew Torn (2024)",
		"url": "https://www.imdb.com/title/tt23157384/?ref_=rlm"
	},
	{
		"title": "Lilly (2024)",
		"url": "https://www.imdb.com/title/tt5853716/?ref_=rlm"
	},
	{
		"title": "A Gilded Game (2025)",
		"url": "https://www.imdb.com/title/tt23461006/?ref_=rlm"
	},
	{
		"title": "Abir Gulaal (2025)",
		"url": "https://www.imdb.com/title/tt32828077/?ref_=rlm"
	},
	{
		"title": "P31 (2025)",
		"url": "https://www.imdb.com/title/tt3842436/?ref_=rlm"
	},
	{
		"title": "Tom Dustin: Portrait of a Comedian (2024)",
		"url": "https://www.imdb.com/title/tt34957141/?ref_=rlm"
	},
	{
		"title": "Show Me Your Glory (2025)",
		"url": "https://www.imdb.com/title/tt36164068/?ref_=rlm"
	},
	{
		"title": "The Lost Princess (2025)",
		"url": "https://www.imdb.com/title/tt14830912/?ref_=rlm"
	},
	{
		"title": "The Lost Locket (2025)",
		"url": "https://www.imdb.com/title/tt12671466/?ref_=rlm"
	},
	{
		"title": "Final Destination: Bloodlines (2025)",
		"url": "https://www.imdb.com/title/tt9619824/?ref_=rlm"
	},
	{
		"title": "Hurry Up Tomorrow (2025)",
		"url": "https://www.imdb.com/title/tt26927452/?ref_=rlm"
	},
	{
		"title": "Teenage Mutant Ninja Turtles: The Rise of Leo (2025)",
		"url": "https://www.imdb.com/title/tt36270018/?ref_=rlm"
	},
	{
		"title": "Magic Farm (2025)",
		"url": "https://www.imdb.com/title/tt34966919/?ref_=rlm"
	},
	{
		"title": "The Loot (2025)",
		"url": "https://www.imdb.com/title/tt35462051/?ref_=rlm"
	},
	{
		"title": "The Crypto: Beyond (2025)",
		"url": "https://www.imdb.com/title/tt30609082/?ref_=rlm"
	},
	{
		"title": "Mission: Impossible - The Final Reckoning (2025)",
		"url": "https://www.imdb.com/title/tt9603208/?ref_=rlm"
	},
	{
		"title": "Lilo & Stitch (2025)",
		"url": "https://www.imdb.com/title/tt11655566/?ref_=rlm"
	},
	{
		"title": "The Last Rodeo (2025)",
		"url": "https://www.imdb.com/title/tt30908405/?ref_=rlm"
	},
	{
		"title": "Sister Midnight (2024)",
		"url": "https://www.imdb.com/title/tt32060445/?ref_=rlm"
	},
	{
		"title": "Trail of Vengeance (2025)",
		"url": "https://www.imdb.com/title/tt32812105/?ref_=rlm"
	},
	{
		"title": "Karate Kid: Legends (2025)",
		"url": "https://www.imdb.com/title/tt1674782/?ref_=rlm"
	},
	{
		"title": "Bring Her Back (2025)",
		"url": "https://www.imdb.com/title/tt32246771/?ref_=rlm"
	},
	{
		"title": "Tim Travers & the Time Travelers Paradox (2024)",
		"url": "https://www.imdb.com/title/tt22884216/?ref_=rlm"
	},
	{
		"title": "Jane Austen Wrecked My Life (2024)",
		"url": "https://www.imdb.com/title/tt31112509/?ref_=rlm"
	},
	{
		"title": "Boomerang Bro Gets Grounded: The First Movie - Kalahari Waterpark Disaster (2025)",
		"url": "https://www.imdb.com/title/tt36386386/?ref_=rlm"
	},
	{
		"title": "Thug Life (2025)",
		"url": "https://www.imdb.com/title/tt23398540/?ref_=rlm"
	},
	{
		"title": "From the World of John Wick: Ballerina (2025)",
		"url": "https://www.imdb.com/title/tt7181546/?ref_=rlm"
	},
	{
		"title": "The Life of Chuck (2024)",
		"url": "https://www.imdb.com/title/tt12908150/?ref_=rlm"
	},
	{
		"title": "The Phoenician Scheme (2025)",
		"url": "https://www.imdb.com/title/tt30840798/?ref_=rlm"
	},
	{
		"title": "The Ritual (2025)",
		"url": "https://www.imdb.com/title/tt32194932/?ref_=rlm"
	},
	{
		"title": "Dangerous Animals (2025)",
		"url": "https://www.imdb.com/title/tt32299316/?ref_=rlm"
	},
	{
		"title": "I Don't Understand You (2024)",
		"url": "https://www.imdb.com/title/tt27623406/?ref_=rlm"
	},
	{
		"title": "Bad Shabbos (2024)",
		"url": "https://www.imdb.com/title/tt14402042/?ref_=rlm"
	},
	{
		"title": "Crawlers (2025)",
		"url": "https://www.imdb.com/title/tt8639168/?ref_=rlm"
	},
	{
		"title": "How to Train Your Dragon (2025)",
		"url": "https://www.imdb.com/title/tt26743210/?ref_=rlm"
	},
	{
		"title": "Materialists (2025)",
		"url": "https://www.imdb.com/title/tt30253473/?ref_=rlm"
	},
	{
		"title": "The Unholy Trinity (2024)",
		"url": "https://www.imdb.com/title/tt6300910/?ref_=rlm"
	},
	{
		"title": "28 Years Later (2025)",
		"url": "https://www.imdb.com/title/tt10548174/?ref_=rlm"
	},
	{
		"title": "Elio (2025)",
		"url": "https://www.imdb.com/title/tt4900148/?ref_=rlm"
	},
	{
		"title": "Bride Hard (2025)",
		"url": "https://www.imdb.com/title/tt21317634/?ref_=rlm"
	},
	{
		"title": "Sovereign (2025)",
		"url": "https://www.imdb.com/title/tt26843513/?ref_=rlm"
	},
	{
		"title": "Marlee Matlin: Not Alone Anymore (2025)",
		"url": "https://www.imdb.com/title/tt33322301/?ref_=rlm"
	},
	{
		"title": "Harley Flanagan: Wired for Chaos (2024)",
		"url": "https://www.imdb.com/title/tt34280312/?ref_=rlm"
	},
	{
		"title": "Lost Weekend (2025)",
		"url": "https://www.imdb.com/title/tt16085546/?ref_=rlm"
	}

]

const urls2 = [
	{
		"title": "Fight or Flight (2024)",
		"url": "https://www.imdb.com/title/tt13652286/?ref_=rlm"
	},
	{
		"title": "Clown in a Cornfield (2025)",
		"url": "https://www.imdb.com/title/tt23060698/?ref_=rlm"
	},
	{
		"title": "Friendship (2024)",
		"url": "https://www.imdb.com/title/tt30505698/?ref_=rlm"
	},
	{
		"title": "Shadow Force (2025)",
		"url": "https://www.imdb.com/title/tt11092020/?ref_=rlm"
	},
	{
		"title": "Juliet & Romeo (2025)",
		"url": "https://www.imdb.com/title/tt26597666/?ref_=rlm"
	},
	{
		"title": "The Lightning Code (2025)",
		"url": "https://www.imdb.com/title/tt16310582/?ref_=rlm"
	},
	{
		"title": "Sew Torn (2024)",
		"url": "https://www.imdb.com/title/tt23157384/?ref_=rlm"
	},
	{
		"title": "Lilly (2024)",
		"url": "https://www.imdb.com/title/tt5853716/?ref_=rlm"
	},
	{
		"title": "A Gilded Game (2025)",
		"url": "https://www.imdb.com/title/tt23461006/?ref_=rlm"
	},
	{
		"title": "Abir Gulaal (2025)",
		"url": "https://www.imdb.com/title/tt32828077/?ref_=rlm"
	},
	{
		"title": "P31 (2025)",
		"url": "https://www.imdb.com/title/tt3842436/?ref_=rlm"
	},
	{
		"title": "Tom Dustin: Portrait of a Comedian (2024)",
		"url": "https://www.imdb.com/title/tt34957141/?ref_=rlm"
	},
	{
		"title": "Show Me Your Glory (2025)",
		"url": "https://www.imdb.com/title/tt36164068/?ref_=rlm"
	},
	{
		"title": "The Lost Princess (2025)",
		"url": "https://www.imdb.com/title/tt14830912/?ref_=rlm"
	},
	{
		"title": "The Lost Locket (2025)",
		"url": "https://www.imdb.com/title/tt12671466/?ref_=rlm"
	},
	{
		"title": "Final Destination: Bloodlines (2025)",
		"url": "https://www.imdb.com/title/tt9619824/?ref_=rlm"
	},
	{
		"title": "Hurry Up Tomorrow (2025)",
		"url": "https://www.imdb.com/title/tt26927452/?ref_=rlm"
	},
	{
		"title": "Teenage Mutant Ninja Turtles: The Rise of Leo (2025)",
		"url": "https://www.imdb.com/title/tt36270018/?ref_=rlm"
	},
	{
		"title": "Magic Farm (2025)",
		"url": "https://www.imdb.com/title/tt34966919/?ref_=rlm"
	},
	{
		"title": "The Loot (2025)",
		"url": "https://www.imdb.com/title/tt35462051/?ref_=rlm"
	},
	{
		"title": "The Crypto: Beyond (2025)",
		"url": "https://www.imdb.com/title/tt30609082/?ref_=rlm"
	},
	{
		"title": "I Was Honey Boo Boo (2025)",
		"url": "https://www.imdb.com/title/tt36488577/?ref_=rlm"
	},
	{
		"title": "'90s Babiez (2025)",
		"url": "https://www.imdb.com/title/tt14855340/?ref_=rlm"
	},
	{
		"title": "Mission: Impossible - The Final Reckoning (2025)",
		"url": "https://www.imdb.com/title/tt9603208/?ref_=rlm"
	},
	{
		"title": "Lilo & Stitch (2025)",
		"url": "https://www.imdb.com/title/tt11655566/?ref_=rlm"
	},
	{
		"title": "The Last Rodeo (2025)",
		"url": "https://www.imdb.com/title/tt30908405/?ref_=rlm"
	},
	{
		"title": "Sister Midnight (2024)",
		"url": "https://www.imdb.com/title/tt32060445/?ref_=rlm"
	},
	{
		"title": "Trail of Vengeance (2025)",
		"url": "https://www.imdb.com/title/tt32812105/?ref_=rlm"
	},
	{
		"title": "Karate Kid: Legends (2025)",
		"url": "https://www.imdb.com/title/tt1674782/?ref_=rlm"
	},
	{
		"title": "Bring Her Back (2025)",
		"url": "https://www.imdb.com/title/tt32246771/?ref_=rlm"
	},
	{
		"title": "Tim Travers & the Time Travelers Paradox (2024)",
		"url": "https://www.imdb.com/title/tt22884216/?ref_=rlm"
	},
	{
		"title": "Jane Austen Wrecked My Life (2024)",
		"url": "https://www.imdb.com/title/tt31112509/?ref_=rlm"
	},
	{
		"title": "Boomerang Bro Gets Grounded: The First Movie - Kalahari Waterpark Disaster (2025)",
		"url": "https://www.imdb.com/title/tt36386386/?ref_=rlm"
	},
	{
		"title": "Thug Life (2025)",
		"url": "https://www.imdb.com/title/tt23398540/?ref_=rlm"
	},
	{
		"title": "From the World of John Wick: Ballerina (2025)",
		"url": "https://www.imdb.com/title/tt7181546/?ref_=rlm"
	},
	{
		"title": "The Life of Chuck (2024)",
		"url": "https://www.imdb.com/title/tt12908150/?ref_=rlm"
	},
	{
		"title": "The Phoenician Scheme (2025)",
		"url": "https://www.imdb.com/title/tt30840798/?ref_=rlm"
	},
	{
		"title": "The Ritual (2025)",
		"url": "https://www.imdb.com/title/tt32194932/?ref_=rlm"
	},
	{
		"title": "Dangerous Animals (2025)",
		"url": "https://www.imdb.com/title/tt32299316/?ref_=rlm"
	},
	{
		"title": "I Don't Understand You (2024)",
		"url": "https://www.imdb.com/title/tt27623406/?ref_=rlm"
	},
	{
		"title": "Bad Shabbos (2024)",
		"url": "https://www.imdb.com/title/tt14402042/?ref_=rlm"
	},
	{
		"title": "Crawlers (2025)",
		"url": "https://www.imdb.com/title/tt8639168/?ref_=rlm"
	},
	{
		"title": "How to Train Your Dragon (2025)",
		"url": "https://www.imdb.com/title/tt26743210/?ref_=rlm"
	},
	{
		"title": "Materialists (2025)",
		"url": "https://www.imdb.com/title/tt30253473/?ref_=rlm"
	},
	{
		"title": "The Unholy Trinity (2024)",
		"url": "https://www.imdb.com/title/tt6300910/?ref_=rlm"
	},
	{
		"title": "Prime Minister (2025)",
		"url": "https://www.imdb.com/title/tt34965625/?ref_=rlm"
	},
	{
		"title": "Becoming the Night: A Nightwing Story (2025)",
		"url": "https://www.imdb.com/title/tt27458104/?ref_=rlm"
	},
	{
		"title": "28 Years Later (2025)",
		"url": "https://www.imdb.com/title/tt10548174/?ref_=rlm"
	},
	{
		"title": "Elio (2025)",
		"url": "https://www.imdb.com/title/tt4900148/?ref_=rlm"
	},
	{
		"title": "Bride Hard (2025)",
		"url": "https://www.imdb.com/title/tt21317634/?ref_=rlm"
	},
	{
		"title": "Sovereign (2025)",
		"url": "https://www.imdb.com/title/tt26843513/?ref_=rlm"
	},
	{
		"title": "Marlee Matlin: Not Alone Anymore (2025)",
		"url": "https://www.imdb.com/title/tt33322301/?ref_=rlm"
	},
	{
		"title": "Harley Flanagan: Wired for Chaos (2024)",
		"url": "https://www.imdb.com/title/tt34280312/?ref_=rlm"
	},
	{
		"title": "Lost Weekend (2025)",
		"url": "https://www.imdb.com/title/tt16085546/?ref_=rlm"
	},
	{
		"title": "F1 (2025)",
		"url": "https://www.imdb.com/title/tt16311594/?ref_=rlm"
	},
	{
		"title": "M3GAN 2.0 (2025)",
		"url": "https://www.imdb.com/title/tt26342662/?ref_=rlm"
	},
	{
		"title": "Ponyboi (2024)",
		"url": "https://www.imdb.com/title/tt23939106/?ref_=rlm"
	},
	{
		"title": "SKG: Death Row Records - Thru My Eyez (Documentary) (2025)",
		"url": "https://www.imdb.com/title/tt35435308/?ref_=rlm"
	},
	{
		"title": "Jurassic World Rebirth (2025)",
		"url": "https://www.imdb.com/title/tt31036941/?ref_=rlm"
	},
	{
		"title": "40 Acres (2024)",
		"url": "https://www.imdb.com/title/tt29634843/?ref_=rlm"
	},
	{
		"title": "Divine Soldiers (2025)",
		"url": "https://www.imdb.com/title/tt15138244/?ref_=rlm"
	},
	{
		"title": "Touch (2025)",
		"url": "https://www.imdb.com/title/tt10826586/?ref_=rlm"
	},
	{
		"title": "To Give or Not to Give: Reparations for Slavery (2025)",
		"url": "https://www.imdb.com/title/tt4601194/?ref_=rlm"
	},
	{
		"title": "Superman (2025)",
		"url": "https://www.imdb.com/title/tt5950044/?ref_=rlm"
	},
	{
		"title": "Skill House (2025)",
		"url": "https://www.imdb.com/title/tt19637220/?ref_=rlm"
	},
	{
		"title": "I Know What You Did Last Summer (2025)",
		"url": "https://www.imdb.com/title/tt4045450/?ref_=rlm"
	},
	{
		"title": "Eddington (2025)",
		"url": "https://www.imdb.com/title/tt31176520/?ref_=rlm"
	},
	{
		"title": "Smurfs (2025)",
		"url": "https://www.imdb.com/title/tt18069420/?ref_=rlm"
	},
	{
		"title": "The Fantastic Four: First Steps (2025)",
		"url": "https://www.imdb.com/title/tt10676052/?ref_=rlm"
	},
	{
		"title": "AJ Goes to the Dog Park (2024)",
		"url": "https://www.imdb.com/title/tt33318123/?ref_=rlm"
	},
	{
		"title": "Together (2025)",
		"url": "https://www.imdb.com/title/tt31184028/?ref_=rlm"
	},
	{
		"title": "The Naked Gun (2025)",
		"url": "https://www.imdb.com/title/tt3402138/?ref_=rlm"
	},
	{
		"title": "The Bad Guys 2 (2025)",
		"url": "https://www.imdb.com/title/tt30017619/?ref_=rlm"
	},
	{
		"title": "Souleymane's Story (2024)",
		"url": "https://www.imdb.com/title/tt32086046/?ref_=rlm"
	},
	{
		"title": "Experiment 77 (2025)",
		"url": "https://www.imdb.com/title/tt4292334/?ref_=rlm"
	},
	{
		"title": "Big Tree (2025)",
		"url": "https://www.imdb.com/title/tt21629948/?ref_=rlm"
	},
	{
		"title": "Weapons (2025)",
		"url": "https://www.imdb.com/title/tt26581740/?ref_=rlm"
	},
	{
		"title": "Freakier Friday (2025)",
		"url": "https://www.imdb.com/title/tt31956415/?ref_=rlm"
	},
	{
		"title": "My Mother's Wedding (2023)",
		"url": "https://www.imdb.com/title/tt20911974/?ref_=rlm"
	},
	{
		"title": "Boys Go to Jupiter (2024)",
		"url": "https://www.imdb.com/title/tt31021863/?ref_=rlm"
	},
	{
		"title": "Nobody 2 (2025)",
		"url": "https://www.imdb.com/title/tt28996126/?ref_=rlm"
	},
	{
		"title": "Witchboard (2024)",
		"url": "https://www.imdb.com/title/tt2256055/?ref_=rlm"
	},
	{
		"title": "Honey Don't! (2025)",
		"url": "https://www.imdb.com/title/tt30645201/?ref_=rlm"
	},
	{
		"title": "Highest 2 Lowest (2025)",
		"url": "https://www.imdb.com/title/tt31194612/?ref_=rlm"
	},
	{
		"title": "Americana (2023)",
		"url": "https://www.imdb.com/title/tt17676734/?ref_=rlm"
	},
	{
		"title": "Splitsville (2025)",
		"url": "https://www.imdb.com/title/tt33247023/?ref_=rlm"
	},
	{
		"title": "Clika (2025)",
		"url": "https://www.imdb.com/title/tt28334938/?ref_=rlm"
	},
	{
		"title": "Caught Stealing (2025)",
		"url": "https://www.imdb.com/title/tt1493274/?ref_=rlm"
	},
	{
		"title": "The Toxic Avenger (2023)",
		"url": "https://www.imdb.com/title/tt1633359/?ref_=rlm"
	},
	{
		"title": "The Roses (2025)",
		"url": "https://www.imdb.com/title/tt31973693/?ref_=rlm"
	},
	{
		"title": "American Summer (2025)",
		"url": "https://www.imdb.com/title/tt6523546/?ref_=rlm"
	},
	{
		"title": "Another in the Fire (2025)",
		"url": "https://www.imdb.com/title/tt28784201/?ref_=rlm"
	},
	{
		"title": "Jessica Frost (2025)",
		"url": "https://www.imdb.com/title/tt4519000/?ref_=rlm"
	},
	{
		"title": "The Conjuring: Last Rites (2025)",
		"url": "https://www.imdb.com/title/tt22898462/?ref_=rlm"
	},
	{
		"title": "Twinless (2025)",
		"url": "https://www.imdb.com/title/tt31322753/?ref_=rlm"
	},
	{
		"title": "Light of the World (2025)",
		"url": "https://www.imdb.com/title/tt33235979/?ref_=rlm"
	},
	{
		"title": "Downton Abbey: The Grand Finale (2025)",
		"url": "https://www.imdb.com/title/tt31888477/?ref_=rlm"
	},
	{
		"title": "The Long Walk (2025)",
		"url": "https://www.imdb.com/title/tt10374610/?ref_=rlm"
	},
	{
		"title": "Spinal Tap II (2025)",
		"url": "https://www.imdb.com/title/tt20222166/?ref_=rlm"
	},
	{
		"title": "Untitled Disney (2025)",
		"url": "https://www.imdb.com/title/tt26443605/?ref_=rlm"
	},
	{
		"title": "Him (2025)",
		"url": "https://www.imdb.com/title/tt20990442/?ref_=rlm"
	},
	{
		"title": "A Big Bold Beautiful Journey (2025)",
		"url": "https://www.imdb.com/title/tt13650700/?ref_=rlm"
	},
	{
		"title": "One Battle After Another (2025)",
		"url": "https://www.imdb.com/title/tt30144839/?ref_=rlm"
	},
	{
		"title": "The Strangers: Chapter 2 (2025)",
		"url": "https://www.imdb.com/title/tt28671344/?ref_=rlm"
	},
	{
		"title": "Gabby's Dollhouse: The Movie (2025)",
		"url": "https://www.imdb.com/title/tt32214143/?ref_=rlm"
	},
	{
		"title": "Bau: Artist at War (2024)",
		"url": "https://www.imdb.com/title/tt8839576/?ref_=rlm"
	},
	{
		"title": "The Smashing Machine (2025)",
		"url": "https://www.imdb.com/title/tt11214558/?ref_=rlm"
	},
	{
		"title": "Michael (2025)",
		"url": "https://www.imdb.com/title/tt11378946/?ref_=rlm"
	},
	{
		"title": "Roofman (2025)",
		"url": "https://www.imdb.com/title/tt4627382/?ref_=rlm"
	},
	{
		"title": "We Harvest (2025)",
		"url": "https://www.imdb.com/title/tt7193124/?ref_=rlm"
	},
	{
		"title": "The Legend of Johnny Jones (2025)",
		"url": "https://www.imdb.com/title/tt10928904/?ref_=rlm"
	},
	{
		"title": "Tron: Ares (2025)",
		"url": "https://www.imdb.com/title/tt6604188/?ref_=rlm"
	},
	{
		"title": "Kiss of the Spider Woman (2025)",
		"url": "https://www.imdb.com/title/tt30400277/?ref_=rlm"
	},
	{
		"title": "Animal Friends (2025)",
		"url": "https://www.imdb.com/title/tt16911616/?ref_=rlm"
	},
	{
		"title": "On Fire (2025)",
		"url": "https://www.imdb.com/title/tt28078628/?ref_=rlm"
	},
	{
		"title": "Bone Lake (2024)",
		"url": "https://www.imdb.com/title/tt26783625/?ref_=rlm"
	},
	{
		"title": "Dr. A. P. J. Abdul Kalam (2025)",
		"url": "https://www.imdb.com/title/tt15845656/?ref_=rlm"
	},
	{
		"title": "Black Phone 2 (2025)",
		"url": "https://www.imdb.com/title/tt29644189/?ref_=rlm"
	},
	{
		"title": "After the Hunt (2025)",
		"url": "https://www.imdb.com/title/tt32159989/?ref_=rlm"
	},
	{
		"title": "Good Fortune (2025)",
		"url": "https://www.imdb.com/title/tt27543578/?ref_=rlm"
	},
	{
		"title": "Pets on a Train (2025)",
		"url": "https://www.imdb.com/title/tt36424914/?ref_=rlm"
	},
	{
		"title": "Regretting You (2025)",
		"url": "https://www.imdb.com/title/tt33088452/?ref_=rlm"
	},
	{
		"title": "The Watchers (2025)",
		"url": "https://www.imdb.com/title/tt30874432/?ref_=rlm"
	},
	{
		"title": "Mistress Dispeller (2024)",
		"url": "https://www.imdb.com/title/tt22060498/?ref_=rlm"
	},
	{
		"title": "Detour 95 (2025)",
		"url": "https://www.imdb.com/title/tt10844184/?ref_=rlm"
	},
	{
		"title": "Chainsaw Man - The Movie: Reze Arc (2025)",
		"url": "https://www.imdb.com/title/tt30472557/?ref_=rlm"
	},
	{
		"title": "Bugonia (2025)",
		"url": "https://www.imdb.com/title/tt12300742/?ref_=rlm"
	},
	{
		"title": "The Third Parent (2025)",
		"url": "https://www.imdb.com/title/tt8702454/?ref_=rlm"
	},
	{
		"title": "The Evil Within (2025)",
		"url": "https://www.imdb.com/title/tt11487742/?ref_=rlm"
	},
	{
		"title": "Predator: Badlands (2025)",
		"url": "https://www.imdb.com/title/tt31227572/?ref_=rlm"
	},
	{
		"title": "The Running Man (2025)",
		"url": "https://www.imdb.com/title/tt14107334/?ref_=rlm"
	},
	{
		"title": "Christmas Eve (2025)",
		"url": "https://www.imdb.com/title/tt8857166/?ref_=rlm"
	},
	{
		"title": "The Cincinnati Spin (2025)",
		"url": "https://www.imdb.com/title/tt10115998/?ref_=rlm"
	},
	{
		"title": "Now You See Me: Now You Don't (2025)",
		"url": "https://www.imdb.com/title/tt4712810/?ref_=rlm"
	},
	{
		"title": "Jay Kelly (2025)",
		"url": "https://www.imdb.com/title/tt30446847/?ref_=rlm"
	},
	{
		"title": "Indecipherable (2025)",
		"url": "https://www.imdb.com/title/tt34536268/?ref_=rlm"
	},
	{
		"title": "A Figgly Christmas (2025)",
		"url": "https://www.imdb.com/title/tt10994300/?ref_=rlm"
	},
	{
		"title": "Wicked: For Good (2025)",
		"url": "https://www.imdb.com/title/tt19847976/?ref_=rlm"
	},
	{
		"title": "Return to Silent Hill (2025)",
		"url": "https://www.imdb.com/title/tt22868010/?ref_=rlm"
	},
	{
		"title": "Sisu 2 (2025)",
		"url": "https://www.imdb.com/title/tt31844586/?ref_=rlm"
	},
	{
		"title": "David (2025)",
		"url": "https://www.imdb.com/title/tt15678738/?ref_=rlm"
	},
	{
		"title": "STZ (2025)",
		"url": "https://www.imdb.com/title/tt10994444/?ref_=rlm"
	},
	{
		"title": "Zootopia 2 (2025)",
		"url": "https://www.imdb.com/title/tt26443597/?ref_=rlm"
	},
	{
		"title": "The Accident (2025)",
		"url": "https://www.imdb.com/title/tt10713496/?ref_=rlm"
	},
	{
		"title": "Five Nights at Freddy's 2 (2025)",
		"url": "https://www.imdb.com/title/tt30274401/?ref_=rlm"
	},
	{
		"title": "Hamnet (2025)",
		"url": "https://www.imdb.com/title/tt14905854/?ref_=rlm"
	},
	{
		"title": "Hateshinaki Scarlet (2025)",
		"url": "https://www.imdb.com/title/tt35114460/?ref_=rlm"
	},
	{
		"title": "Ella McCay (2025)",
		"url": "https://www.imdb.com/title/tt30096221/?ref_=rlm"
	},
	{
		"title": "Avatar: Fire and Ash (2025)",
		"url": "https://www.imdb.com/title/tt1757678/?ref_=rlm"
	},
	{
		"title": "Zero A.D. (2025)",
		"url": "https://www.imdb.com/title/tt34491649/?ref_=rlm"
	},
	{
		"title": "The SpongeBob Movie: Search for Squarepants (2025)",
		"url": "https://www.imdb.com/title/tt23572848/?ref_=rlm"
	},
	{
		"title": "The Street Avenger (2025)",
		"url": "https://www.imdb.com/title/tt10921118/?ref_=rlm"
	},
	{
		"title": "The Housemaid (2025)",
		"url": "https://www.imdb.com/title/tt27543632/?ref_=rlm"
	},
	{
		"title": "Return of the Living Dead (2025)",
		"url": "https://www.imdb.com/title/tt31350873/?ref_=rlm"
	},
	{
		"title": "Anaconda (2025)",
		"url": "https://www.imdb.com/title/tt33244668/?ref_=rlm"
	},
	{
		"title": "Song Sung Blue (2025)",
		"url": "https://www.imdb.com/title/tt30343021/?ref_=rlm"
	},
	{
		"title": "Planet Gliese (2025)",
		"url": "https://www.imdb.com/title/tt11246550/?ref_=rlm"
	},
	{
		"title": "Alien Wars: Judgement Day (2025)",
		"url": "https://www.imdb.com/title/tt10209920/?ref_=rlm"
	},
	{
		"title": "Killer Clown Girls (2025)",
		"url": "https://www.imdb.com/title/tt28371961/?ref_=rlm"
	},
	{
		"title": "Apophis 2029 (2025)",
		"url": "https://www.imdb.com/title/tt9810236/?ref_=rlm"
	},
	{
		"title": "Nightmare (2025)",
		"url": "https://www.imdb.com/title/tt32020960/?ref_=rlm"
	},
	{
		"title": "The King, The Swordsman, and the Sorceress (2025)",
		"url": "https://www.imdb.com/title/tt9810278/?ref_=rlm"
	},
	{
		"title": "Crystal (2025)",
		"url": "https://www.imdb.com/title/tt15295176/?ref_=rlm"
	},
	{
		"title": "Soulm8te (2025)",
		"url": "https://www.imdb.com/title/tt32654916/?ref_=rlm"
	},
	{
		"title": "Mutiny (2026)",
		"url": "https://www.imdb.com/title/tt32338669/?ref_=rlm"
	},
	{
		"title": "28 Years Later: The Bone Temple (2026)",
		"url": "https://www.imdb.com/title/tt32141377/?ref_=rlm"
	},
	{
		"title": "Mercy (2026)",
		"url": "https://www.imdb.com/title/tt31050594/?ref_=rlm"
	},
	{
		"title": "The Legend of Aang: The Last Airbender (2026)",
		"url": "https://www.imdb.com/title/tt18259538/?ref_=rlm"
	},
	{
		"title": "Send Help (2026)",
		"url": "https://www.imdb.com/title/tt8036976/?ref_=rlm"
	},
	{
		"title": "Wuthering Heights (2025)",
		"url": "https://www.imdb.com/title/tt32897959/?ref_=rlm"
	},
	{
		"title": "Reminders of Him (2026)",
		"url": "https://www.imdb.com/title/tt33714084/?ref_=rlm"
	},
	{
		"title": "GOAT (2026)",
		"url": "https://www.imdb.com/title/tt27613895/?ref_=rlm"
	},
	{
		"title": "What About Love (2013)",
		"url": "https://www.imdb.com/title/tt2263648/?ref_=rlm"
	},
	{
		"title": "Scream 7 (2026)",
		"url": "https://www.imdb.com/title/tt27047903/?ref_=rlm"
	},
	{
		"title": "The Cat in the Hat (2026)",
		"url": "https://www.imdb.com/title/tt2321555/?ref_=rlm"
	},
	{
		"title": "The Bride (2026)",
		"url": "https://www.imdb.com/title/tt30851137/?ref_=rlm"
	},
	{
		"title": "Hoppers (2026)",
		"url": "https://www.imdb.com/title/tt26443616/?ref_=rlm"
	},
	{
		"title": "Untitled the Exorcist/Mike Flanagan Project (2026)",
		"url": "https://www.imdb.com/title/tt32492552/?ref_=rlm"
	},
	{
		"title": "The Breadwinner (2026)",
		"url": "https://www.imdb.com/title/tt34459219/?ref_=rlm"
	},
	{
		"title": "Project Hail Mary (2026)",
		"url": "https://www.imdb.com/title/tt12042730/?ref_=rlm"
	},
	{
		"title": "I Can Only Imagine Sequel (2026)",
		"url": "https://www.imdb.com/title/tt34888646/?ref_=rlm"
	},
	{
		"title": "Untitled Trey Parker / Matt Stone / Kendrick Lamar / Dave Free (2026)",
		"url": "https://www.imdb.com/title/tt17042980/?ref_=rlm"
	},
	{
		"title": "The Singing Priest (2026)",
		"url": "https://www.imdb.com/title/tt32207971/?ref_=rlm"
	},
	{
		"title": "The Super Mario Bros. Movie Sequel (2026)",
		"url": "https://www.imdb.com/title/tt28650488/?ref_=rlm"
	},
	{
		"title": "Lee Cronin's The Mummy (2026)",
		"url": "https://www.imdb.com/title/tt32612507/?ref_=rlm"
	},
	{
		"title": "Avengers: Doomsday (2026)",
		"url": "https://www.imdb.com/title/tt21357150/?ref_=rlm"
	}
]

const urls = [
	{
		"title": "Abir Gulaal (2025)",
		"url": "https://www.imdb.com/title/tt32828077/?ref_=rlm"
	},
	{
		"title": "Crayon Shin-chan: Ora's Dinosaur Diary (2024)",
		"url": "https://www.imdb.com/title/tt30400536/?ref_=rlm"
	},
	{
		"title": "Subham (2025)",
		"url": "https://www.imdb.com/title/tt34376523/?ref_=rlm"
	},
	{
		"title": "PSI Arjun (2025)",
		"url": "https://www.imdb.com/title/tt36537780/?ref_=rlm"
	},
	{
		"title": "Prince and Family (2025)",
		"url": "https://www.imdb.com/title/tt32105116/?ref_=rlm"
	},
	{
		"title": "Majhi Prarthana (2025)",
		"url": "https://www.imdb.com/title/tt36456163/?ref_=rlm"
	},
	{
		"title": "The Networker (2025)",
		"url": "https://www.imdb.com/title/tt35484377/?ref_=rlm"
	},
	{
		"title": "Vishwambara (2025)",
		"url": "https://www.imdb.com/title/tt27670706/?ref_=rlm"
	},
	{
		"title": "Daskath (2024)",
		"url": "https://www.imdb.com/title/tt34942655/?ref_=rlm"
	},
	{
		"title": "Jai Mata ji - lets Rock (2025)",
		"url": "https://www.imdb.com/title/tt35705898/?ref_=rlm"
	},
	{
		"title": "#Single (2025)",
		"url": "https://www.imdb.com/title/tt35694565/?ref_=rlm"
	},
	{
		"title": "Aamar Boss (2024)",
		"url": "https://www.imdb.com/title/tt30318492/?ref_=rlm"
	},
	{
		"title": "Chhabi (Marathi) (2025)",
		"url": "https://www.imdb.com/title/tt35871764/?ref_=rlm"
	},
	{
		"title": "26 November (2025)",
		"url": "https://www.imdb.com/title/tt36616412/?ref_=rlm"
	},
	{
		"title": "Mass Jathara (2025)",
		"url": "https://www.imdb.com/title/tt32135720/?ref_=rlm"
	},
	{
		"title": "Naale Rajaa Koli Majaa (2024)",
		"url": "https://www.imdb.com/title/tt32525026/?ref_=rlm"
	},
	{
		"title": "Casetu Nagen (2025)",
		"url": "https://www.imdb.com/title/tt34148331/?ref_=rlm"
	},
	{
		"title": "Gajaana (2025)",
		"url": "https://www.imdb.com/title/tt31924094/?ref_=rlm"
	},
	{
		"title": "ARI (My Name is Nobody) (2025)",
		"url": "https://www.imdb.com/title/tt27117828/?ref_=rlm"
	},
	{
		"title": "Kaliyugam 2064 (2025)",
		"url": "https://www.imdb.com/title/tt24517610/?ref_=rlm"
	},
	{
		"title": "Azadi (2025)",
		"url": "https://www.imdb.com/title/tt27494358/?ref_=rlm"
	},
	{
		"title": "Nizharkudai (2025)",
		"url": "https://www.imdb.com/title/tt36718029/?ref_=rlm"
	},
	{
		"title": "Final Destination: Bloodlines (2025)",
		"url": "https://www.imdb.com/title/tt9619824/?ref_=rlm"
	},
	{
		"title": "Eleven (2025)",
		"url": "https://www.imdb.com/title/tt28679253/?ref_=rlm"
	},
	{
		"title": "Narivetta (2025)",
		"url": "https://www.imdb.com/title/tt28479285/?ref_=rlm"
	},
	{
		"title": "Bhram (2025)",
		"url": "https://www.imdb.com/title/tt34720674/?ref_=rlm"
	},
	{
		"title": "DD Next Level (2025)",
		"url": "https://www.imdb.com/title/tt32864330/?ref_=rlm"
	},
	{
		"title": "Pune Highway (2024)",
		"url": "https://www.imdb.com/title/tt23752132/?ref_=rlm"
	},
	{
		"title": "Surprise (2025)",
		"url": "https://www.imdb.com/title/tt28288759/?ref_=rlm"
	},
	{
		"title": "April May 99 (2025)",
		"url": "https://www.imdb.com/title/tt35300838/?ref_=rlm"
	},
	{
		"title": "Banjara (2025)",
		"url": "https://www.imdb.com/title/tt34245436/?ref_=rlm"
	},
	{
		"title": "Written & Directed by God (2025)",
		"url": "https://www.imdb.com/title/tt27170332/?ref_=rlm"
	},
	{
		"title": "Lovely (2025)",
		"url": "https://www.imdb.com/title/tt27917202/?ref_=rlm"
	},
	{
		"title": "Suswagatam Khushamadeed (2025)",
		"url": "https://www.imdb.com/title/tt12479632/?ref_=rlm"
	},
	{
		"title": "Maaman (2025)",
		"url": "https://www.imdb.com/title/tt33240591/?ref_=rlm"
	},
	{
		"title": "Khavis (2025)",
		"url": "https://www.imdb.com/title/tt30689215/?ref_=rlm"
	},
	{
		"title": "Posco 307 (2025)",
		"url": "https://www.imdb.com/title/tt36721788/?ref_=rlm"
	},
	{
		"title": "The Protector (2025)",
		"url": "https://www.imdb.com/title/tt34748847/?ref_=rlm"
	},
	{
		"title": "Shaunki Sardar (2025)",
		"url": "https://www.imdb.com/title/tt32965688/?ref_=rlm"
	},
	{
		"title": "23 (Iravai Moodu) (2025)",
		"url": "https://www.imdb.com/title/tt35851471/?ref_=rlm"
	},
	{
		"title": "Jora Kaiya Thattunga (2025)",
		"url": "https://www.imdb.com/title/tt32474216/?ref_=rlm"
	},
	{
		"title": "Enna Nu Rehna Sehna Ni Aaunda (2025)",
		"url": "https://www.imdb.com/title/tt33044546/?ref_=rlm"
	},
	{
		"title": "Oka Brundavanam (2025)",
		"url": "https://www.imdb.com/title/tt36461664/?ref_=rlm"
	},
	{
		"title": "Mission: Impossible - The Final Reckoning (2025)",
		"url": "https://www.imdb.com/title/tt9603208/?ref_=rlm"
	},
	{
		"title": "Banda Yeh Bindaas Hai (2025)",
		"url": "https://www.imdb.com/title/tt13687380/?ref_=rlm"
	},
	{
		"title": "Rendavathu Padam (2025)",
		"url": "https://www.imdb.com/title/tt3426254/?ref_=rlm"
	},
	{
		"title": "2020 Delhi (2025)",
		"url": "https://www.imdb.com/title/tt35684482/?ref_=rlm"
	},
	{
		"title": "Lilo & Stitch (2025)",
		"url": "https://www.imdb.com/title/tt11655566/?ref_=rlm"
	},
	{
		"title": "Kesari Veer (2025)",
		"url": "https://www.imdb.com/title/tt32106176/?ref_=rlm"
	},
	{
		"title": "Kapkapiii (2025)",
		"url": "https://www.imdb.com/title/tt29625386/?ref_=rlm"
	},
	{
		"title": "The Confession (2025)",
		"url": "https://www.imdb.com/title/tt36472335/?ref_=rlm"
	},
	{
		"title": "Bramhaarjun (2025)",
		"url": "https://www.imdb.com/title/tt36256071/?ref_=rlm"
	},
	{
		"title": "Agar Magar Kintu Lekin Parantu (2025)",
		"url": "https://www.imdb.com/title/tt33384881/?ref_=rlm"
	},
	{
		"title": "Power Star 2024 (2025)",
		"url": "https://www.imdb.com/title/tt30459260/?ref_=rlm"
	},
	{
		"title": "Padai Thalaivan (2025)",
		"url": "https://www.imdb.com/title/tt28764064/?ref_=rlm"
	},
	{
		"title": "Tomchi (2025)",
		"url": "https://www.imdb.com/title/tt2273382/?ref_=rlm"
	},
	{
		"title": "Detective Ujjwalan (2025)",
		"url": "https://www.imdb.com/title/tt33319697/?ref_=rlm"
	},
	{
		"title": "Vembu (2025)",
		"url": "https://www.imdb.com/title/tt28601576/?ref_=rlm"
	},
	{
		"title": "Vaama: Ladhai Sanmanachi (2025)",
		"url": "https://www.imdb.com/title/tt35255271/?ref_=rlm"
	},
	{
		"title": "Dilli Dark (2023)",
		"url": "https://www.imdb.com/title/tt29444671/?ref_=rlm"
	},
	{
		"title": "Chandrabindoo (2025)",
		"url": "https://www.imdb.com/title/tt31325540/?ref_=rlm"
	},
	{
		"title": "Myyal (2025)",
		"url": "https://www.imdb.com/title/tt36758219/?ref_=rlm"
	},
	{
		"title": "Mangalashtak Returns (2025)",
		"url": "https://www.imdb.com/title/tt15464520/?ref_=rlm"
	},
	{
		"title": "Alert (2025)",
		"url": "https://www.imdb.com/title/tt36647281/?ref_=rlm"
	},
	{
		"title": "Gumnam Hai Koi (2025)",
		"url": "https://www.imdb.com/title/tt1217572/?ref_=rlm"
	},
	{
		"title": "Karate Kid: Legends (2025)",
		"url": "https://www.imdb.com/title/tt1674782/?ref_=rlm"
	},
	{
		"title": "Kingdom (2025)",
		"url": "https://www.imdb.com/title/tt11773426/?ref_=rlm"
	},
	{
		"title": "Hari Hara Veera Mallu (2025)",
		"url": "https://www.imdb.com/title/tt2691804/?ref_=rlm"
	},
	{
		"title": "Saunkan Saunkanay 2 (2025)",
		"url": "https://www.imdb.com/title/tt34037996/?ref_=rlm"
	},
	{
		"title": "Nikita Roy (2025)",
		"url": "https://www.imdb.com/title/tt18939362/?ref_=rlm"
	},
	{
		"title": "Mr. & Mrs. 420 Again (Part 3) (2025)",
		"url": "https://www.imdb.com/title/tt36109502/?ref_=rlm"
	},
	{
		"title": "The Verdict (2025)",
		"url": "https://www.imdb.com/title/tt32378056/?ref_=rlm"
	},
	{
		"title": "Sonar Kellay Jawker Dhan (2025)",
		"url": "https://www.imdb.com/title/tt36733805/?ref_=rlm"
	},
	{
		"title": "Shubhchintak (2025)",
		"url": "https://www.imdb.com/title/tt35977123/?ref_=rlm"
	},
	{
		"title": "Bombay (2025)",
		"url": "https://www.imdb.com/title/tt21357600/?ref_=rlm"
	},
	{
		"title": "Jinn - The Pet (2025)",
		"url": "https://www.imdb.com/title/tt26345633/?ref_=rlm"
	},
	{
		"title": "Maadeva (2025)",
		"url": "https://www.imdb.com/title/tt28789314/?ref_=rlm"
	},
	{
		"title": "Shashtipoorthi (2025)",
		"url": "https://www.imdb.com/title/tt36599929/?ref_=rlm"
	},
	{
		"title": "Thug Life (2025)",
		"url": "https://www.imdb.com/title/tt23398540/?ref_=rlm"
	},
	{
		"title": "From the World of John Wick: Ballerina (2025)",
		"url": "https://www.imdb.com/title/tt7181546/?ref_=rlm"
	},
	{
		"title": "Housefull 5 (2025)",
		"url": "https://www.imdb.com/title/tt9104736/?ref_=rlm"
	},
	{
		"title": "Rudra (2025)",
		"url": "https://www.imdb.com/title/tt36375290/?ref_=rlm"
	},
	{
		"title": "EKKA (2025)",
		"url": "https://www.imdb.com/title/tt33995884/?ref_=rlm"
	},
	{
		"title": "Jarann (2025)",
		"url": "https://www.imdb.com/title/tt36466927/?ref_=rlm"
	},
	{
		"title": "Yaman Kattalai (2025)",
		"url": "https://www.imdb.com/title/tt36718044/?ref_=rlm"
	},
	{
		"title": "Criminal King of Hajipur (2025)",
		"url": "https://www.imdb.com/title/tt33332448/?ref_=rlm"
	},
	{
		"title": "How to Train Your Dragon (2025)",
		"url": "https://www.imdb.com/title/tt26743210/?ref_=rlm"
	},
	{
		"title": "Materialists (2025)",
		"url": "https://www.imdb.com/title/tt30253473/?ref_=rlm"
	},
	{
		"title": "Jombieland (2025)",
		"url": "https://www.imdb.com/title/tt36375452/?ref_=rlm"
	},
	{
		"title": "Ikk Kudi (2025)",
		"url": "https://www.imdb.com/title/tt35063604/?ref_=rlm"
	},
	{
		"title": "Jai Devaa (2025)",
		"url": "https://www.imdb.com/title/tt8694514/?ref_=rlm"
	},
	{
		"title": "Shraap (2025)",
		"url": "https://www.imdb.com/title/tt5534054/?ref_=rlm"
	},
	{
		"title": "Adipoli (2025)",
		"url": "https://www.imdb.com/title/tt36201312/?ref_=rlm"
	},
	{
		"title": "Sitaare Zameen Par (2025)",
		"url": "https://www.imdb.com/title/tt29471573/?ref_=rlm"
	},
	{
		"title": "Kuberaa (2025)",
		"url": "https://www.imdb.com/title/tt23846482/?ref_=rlm"
	},
	{
		"title": "Rekkai Mulaithen (2025)",
		"url": "https://www.imdb.com/title/tt32879899/?ref_=rlm"
	},
	{
		"title": "Kadukka (2025)",
		"url": "https://www.imdb.com/title/tt36575995/?ref_=rlm"
	},
	{
		"title": "Zora (2025)",
		"url": "https://www.imdb.com/title/tt33396471/?ref_=rlm"
	},
	{
		"title": "Shootout at Byculla (2025)",
		"url": "https://www.imdb.com/title/tt10980562/?ref_=rlm"
	},
	{
		"title": "Apne 2 (2025)",
		"url": "https://www.imdb.com/title/tt13556522/?ref_=rlm"
	},
	{
		"title": "F1 (2025)",
		"url": "https://www.imdb.com/title/tt16311594/?ref_=rlm"
	},
	{
		"title": "M3GAN 2.0 (2025)",
		"url": "https://www.imdb.com/title/tt26342662/?ref_=rlm"
	},
	{
		"title": "Kannappa (2025)",
		"url": "https://www.imdb.com/title/tt5306972/?ref_=rlm"
	},
	{
		"title": "Maa (2025)",
		"url": "https://www.imdb.com/title/tt30496762/?ref_=rlm"
	},
	{
		"title": "Gyanvapi Files: A Tailor's Murder Story (2025)",
		"url": "https://www.imdb.com/title/tt28630806/?ref_=rlm"
	},
	{
		"title": "Sardaar Ji 3 (2025)",
		"url": "https://www.imdb.com/title/tt33022037/?ref_=rlm"
	},
	{
		"title": "Geetha Pilusthondi (2025)",
		"url": "https://www.imdb.com/title/tt36759804/?ref_=rlm"
	},
	{
		"title": "Jurassic World Rebirth (2025)",
		"url": "https://www.imdb.com/title/tt31036941/?ref_=rlm"
	},
	{
		"title": "Thammudu (2025)",
		"url": "https://www.imdb.com/title/tt27235882/?ref_=rlm"
	},
	{
		"title": "Metro.... In Dino (2025)",
		"url": "https://www.imdb.com/title/tt24225606/?ref_=rlm"
	},
	{
		"title": "Phoenix (2025)",
		"url": "https://www.imdb.com/title/tt30177354/?ref_=rlm"
	},
	{
		"title": "The Academy of Fine Arts (2025)",
		"url": "https://www.imdb.com/title/tt36652180/?ref_=rlm"
	},
	{
		"title": "Superman (2025)",
		"url": "https://www.imdb.com/title/tt5950044/?ref_=rlm"
	},
	{
		"title": "Maalik (2025)",
		"url": "https://www.imdb.com/title/tt32832266/?ref_=rlm"
	},
	{
		"title": "Aankhon Ki Gustaakhiyan (2025)",
		"url": "https://www.imdb.com/title/tt28812582/?ref_=rlm"
	},
	{
		"title": "I Know What You Did Last Summer (2025)",
		"url": "https://www.imdb.com/title/tt4045450/?ref_=rlm"
	},
	{
		"title": "Smurfs (2025)",
		"url": "https://www.imdb.com/title/tt18069420/?ref_=rlm"
	},
	{
		"title": "Saiyaara (2025)",
		"url": "https://www.imdb.com/title/tt31115829/?ref_=rlm"
	},
	{
		"title": "Sarbala Ji (2025)",
		"url": "https://www.imdb.com/title/tt32872825/?ref_=rlm"
	},
	{
		"title": "Yere Yere Paisa 3 (2025)",
		"url": "https://www.imdb.com/title/tt32345664/?ref_=rlm"
	},
	{
		"title": "The Fantastic Four: First Steps (2025)",
		"url": "https://www.imdb.com/title/tt10676052/?ref_=rlm"
	},
	{
		"title": "Param Sundari (2025)",
		"url": "https://www.imdb.com/title/tt33996113/?ref_=rlm"
	},
	{
		"title": "Afra Tafri (2025)",
		"url": "https://www.imdb.com/title/tt13687332/?ref_=rlm"
	},
	{
		"title": "Son of Sardaar 2 (2025)",
		"url": "https://www.imdb.com/title/tt29429860/?ref_=rlm"
	},
	{
		"title": "The Naked Gun (2025)",
		"url": "https://www.imdb.com/title/tt3402138/?ref_=rlm"
	},
	{
		"title": "Chal Mera Putt 4 (2025)",
		"url": "https://www.imdb.com/title/tt36304565/?ref_=rlm"
	},
	{
		"title": "Mirai (2025)",
		"url": "https://www.imdb.com/title/tt30858568/?ref_=rlm"
	},
	{
		"title": "Boomerang Bro Gets Grounded: The First Movie - Kalahari Waterpark Disaster (2025)",
		"url": "https://www.imdb.com/title/tt36386386/?ref_=rlm"
	},
	{
		"title": "Weapons (2025)",
		"url": "https://www.imdb.com/title/tt26581740/?ref_=rlm"
	},
	{
		"title": "Vicious (2025)",
		"url": "https://www.imdb.com/title/tt31511689/?ref_=rlm"
	},
	{
		"title": "Coolie (2025)",
		"url": "https://www.imdb.com/title/tt27441481/?ref_=rlm"
	},
	{
		"title": "War 2 (2025)",
		"url": "https://www.imdb.com/title/tt27425164/?ref_=rlm"
	},
	{
		"title": "Bihu attack (2025)",
		"url": "https://www.imdb.com/title/tt32065626/?ref_=rlm"
	},
	{
		"title": "The Delhi Files (2025)",
		"url": "https://www.imdb.com/title/tt15416342/?ref_=rlm"
	},
	{
		"title": "45 (2025)",
		"url": "https://www.imdb.com/title/tt27263807/?ref_=rlm"
	},
	{
		"title": "The India Story (2025)",
		"url": "https://www.imdb.com/title/tt35323618/?ref_=rlm"
	},
	{
		"title": "Vibe (2025)",
		"url": "https://www.imdb.com/title/tt31957431/?ref_=rlm"
	},
	{
		"title": "Kashi to Kashmir (2025)",
		"url": "https://www.imdb.com/title/tt24331122/?ref_=rlm"
	},
	{
		"title": "Untitled Karan Johar/Sandeep Modi Project (2025)",
		"url": "https://www.imdb.com/title/tt26915709/?ref_=rlm"
	},
	{
		"title": "Untitled Shah Rukh Khan/Samantha Project (2025)",
		"url": "https://www.imdb.com/title/tt32728302/?ref_=rlm"
	},
	{
		"title": "Osey Arundhathi (2025)",
		"url": "https://www.imdb.com/title/tt34758225/?ref_=rlm"
	},
	{
		"title": "Hridayapoorvam (2025)",
		"url": "https://www.imdb.com/title/tt30818546/?ref_=rlm"
	},
	{
		"title": "Run Bhola Run (2025)",
		"url": "https://www.imdb.com/title/tt13128802/?ref_=rlm"
	},
	{
		"title": "Odum Kuthira Chadum Kuthira (2025)",
		"url": "https://www.imdb.com/title/tt22001978/?ref_=rlm"
	},
	{
		"title": "Baaghi 4 (2025)",
		"url": "https://www.imdb.com/title/tt6203702/?ref_=rlm"
	},
	{
		"title": "Madharasi (2025)",
		"url": "https://www.imdb.com/title/tt28252563/?ref_=rlm"
	},
	{
		"title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle (2025)",
		"url": "https://www.imdb.com/title/tt32820897/?ref_=rlm"
	},
	{
		"title": "Sunny Sanskari Ki Tulsi Kumari (2025)",
		"url": "https://www.imdb.com/title/tt30742355/?ref_=rlm"
	},
	{
		"title": "Vampires Saga (2025)",
		"url": "https://www.imdb.com/title/tt32161887/?ref_=rlm"
	},
	{
		"title": "Jolly LLB 3 (2025)",
		"url": "https://www.imdb.com/title/tt27996020/?ref_=rlm"
	},
	{
		"title": "Love Guru (2025)",
		"url": "https://www.imdb.com/title/tt33054756/?ref_=rlm"
	},
	{
		"title": "Sambarla Yeti Gattu (2025)",
		"url": "https://www.imdb.com/title/tt32728338/?ref_=rlm"
	},
	{
		"title": "Akhanda 2 (2025)",
		"url": "https://www.imdb.com/title/tt27264269/?ref_=rlm"
	},
	{
		"title": "Chainsaw Man - The Movie: Reze Arc (2025)",
		"url": "https://www.imdb.com/title/tt30472557/?ref_=rlm"
	},
	{
		"title": "Nikka Zaildar 4 (2025)",
		"url": "https://www.imdb.com/title/tt31307640/?ref_=rlm"
	},
	{
		"title": "Idly Kadai (2025)",
		"url": "https://www.imdb.com/title/tt33029024/?ref_=rlm"
	},
	{
		"title": "Hai Jawani Toh Ishq Hona Hai (2025)",
		"url": "https://www.imdb.com/title/tt30447822/?ref_=rlm"
	},
	{
		"title": "Kantara A Legend: Chapter 1 (2025)",
		"url": "https://www.imdb.com/title/tt26439764/?ref_=rlm"
	},
	{
		"title": "Raghu Dakat (2025)",
		"url": "https://www.imdb.com/title/tt15891690/?ref_=rlm"
	},
	{
		"title": "Tron: Ares (2025)",
		"url": "https://www.imdb.com/title/tt6604188/?ref_=rlm"
	},
	{
		"title": "Go Goa Gone 2 (2025)",
		"url": "https://www.imdb.com/title/tt3779396/?ref_=rlm"
	},
	{
		"title": "Dr. A. P. J. Abdul Kalam (2025)",
		"url": "https://www.imdb.com/title/tt15845656/?ref_=rlm"
	},
	{
		"title": "Vrusshabha (2025)",
		"url": "https://www.imdb.com/title/tt27496044/?ref_=rlm"
	},
	{
		"title": "Aashiqui 3 (2025)",
		"url": "https://www.imdb.com/title/tt12403994/?ref_=rlm"
	},
	{
		"title": "Untitled Kartik Aaryan/Sreeleela Project (2025)",
		"url": "https://www.imdb.com/title/tt32447514/?ref_=rlm"
	},
	{
		"title": "Tez Raftaaar (2025)",
		"url": "https://www.imdb.com/title/tt21969914/?ref_=rlm"
	},
	{
		"title": "Thama (2025)",
		"url": "https://www.imdb.com/title/tt28102562/?ref_=rlm"
	},
	{
		"title": "No Entry 2 (2025)",
		"url": "https://www.imdb.com/title/tt29301236/?ref_=rlm"
	},
	{
		"title": "7G Rainbow Colony 2 (2025)",
		"url": "https://www.imdb.com/title/tt28549815/?ref_=rlm"
	},
	{
		"title": "Predator: Badlands (2025)",
		"url": "https://www.imdb.com/title/tt31227572/?ref_=rlm"
	},
	{
		"title": "De De Pyaar De 2 (2025)",
		"url": "https://www.imdb.com/title/tt28802657/?ref_=rlm"
	},
	{
		"title": "The Magnetic Fighters (2025)",
		"url": "https://www.imdb.com/title/tt30476573/?ref_=rlm"
	},
	{
		"title": "Arjun Ustara (2025)",
		"url": "https://www.imdb.com/title/tt31969779/?ref_=rlm"
	},
	{
		"title": "Avatar: Fire and Ash (2025)",
		"url": "https://www.imdb.com/title/tt1757678/?ref_=rlm"
	},
	{
		"title": "Alpha (2025)",
		"url": "https://www.imdb.com/title/tt28363783/?ref_=rlm"
	},
	{
		"title": "Aadu 3 (2025)",
		"url": "https://www.imdb.com/title/tt8142672/?ref_=rlm"
	},
	{
		"title": "The SpongeBob Movie: Search for Squarepants (2025)",
		"url": "https://www.imdb.com/title/tt23572848/?ref_=rlm"
	},
	{
		"title": "Jana Nayagan (2026)",
		"url": "https://www.imdb.com/title/tt33379543/?ref_=rlm"
	},
	{
		"title": "Border 2 (2026)",
		"url": "https://www.imdb.com/title/tt30387012/?ref_=rlm"
	},
	{
		"title": "The Legend of Aang: The Last Airbender (2026)",
		"url": "https://www.imdb.com/title/tt18259538/?ref_=rlm"
	},
	{
		"title": "Tu Meri Main Tera Main Tera Tu Meri (2026)",
		"url": "https://www.imdb.com/title/tt35146696/?ref_=rlm"
	},
	{
		"title": "Sanam Teri Kasam 2 (2026)",
		"url": "https://www.imdb.com/title/tt33364212/?ref_=rlm"
	},
	{
		"title": "Tu Yaa Main (2026)",
		"url": "https://www.imdb.com/title/tt36118360/?ref_=rlm"
	},
	{
		"title": "Mardaani 3 (2026)",
		"url": "https://www.imdb.com/title/tt27673536/?ref_=rlm"
	},
	{
		"title": "Toxic (2026)",
		"url": "https://www.imdb.com/title/tt27530512/?ref_=rlm"
	},
	{
		"title": "The Paradise (2026)",
		"url": "https://www.imdb.com/title/tt31969655/?ref_=rlm"
	},
	{
		"title": "Peddi (2026)",
		"url": "https://www.imdb.com/title/tt23865918/?ref_=rlm"
	},
	{
		"title": "Bhooth Bangla (2026)",
		"url": "https://www.imdb.com/title/tt29540862/?ref_=rlm"
	},
	{
		"title": "The Singing Priest (2026)",
		"url": "https://www.imdb.com/title/tt32207971/?ref_=rlm"
	},
	{
		"title": "Awarapan 2 (2026)",
		"url": "https://www.imdb.com/title/tt36300841/?ref_=rlm"
	}
]





const compile = () => {

	const titleFunction = () => {
		const selectTitel = document.querySelector('span[data-testId*=hero__primary-text]')
		return selectTitel ? selectTitel.textContent : "";
	}


	const posterFunction = () => {
		const selectPoster = document.querySelector('div[data-testid*=hero-media__poster]');
		if (!selectPoster) return "";
		const poster = selectPoster.querySelector('div > img');
		return poster ? poster.getAttribute('src') : "";
	}


	const releaseFunction = () => {
		const selectDiv = document.querySelectorAll('div');
		if (!selectDiv) return "";
		const data = Array.from(selectDiv).find(item => {
			const testId = item.getAttribute('data-testid');
			return testId && testId.includes('tm-box-up-date');
		});
		return data ? data.textContent : "";
	}



	const descriptionCalback = () => {
		const selectAllP = document.querySelectorAll('p > span');
		if (!selectAllP) return "";
		const targetedP = Array.from(selectAllP).find(item => {
			const getAttributeElemnt = item.getAttribute('data-testid');
			return getAttributeElemnt && getAttributeElemnt.includes('plot-xl');
		})
		return targetedP ? targetedP.textContent : "";
	}



	const getRating = () => {
		const selectAllP = document.querySelectorAll('div');
		if (!selectAllP) return "";
		const targetedP = Array.from(selectAllP).find(item => {
			const getAttributeElemnt = item.getAttribute('data-testid');
			return getAttributeElemnt && getAttributeElemnt.includes('hero-rating-bar__aggregate-rating__score');
		})
		return targetedP ? targetedP.textContent : "";
	}


	const getLength = () => {
		const selectParent = document.querySelector('section[data-testid*=hero-parent] > div.sc-3b24bae4-3.iDcCm > div.sc-bf57f3f2-0.gDRYed');
		if (!selectParent) return "";
		const allLi = selectParent.querySelectorAll('ul > li');
		return allLi ? Array.from(allLi).map(item => item.textContent.trim()).join(" ") : "";
	}


	const getCategory = () => {
		const selectAllDiv = document.querySelectorAll('div[data-testid*=interests] > div.ipc-chip-list__scroller > a');
		if (!selectAllDiv) return [];
		return selectAllDiv ? Array.from(selectAllDiv).map(item => item.textContent.trim()) : [];
	}


	const getDirtectors = () => {
		const selectAllUl = document.querySelectorAll('li[data-testid*=title-pc-principal-credit]');
		if (!selectAllUl) return [];
		const findDirector = Array.from(selectAllUl).find(item => item.textContent.includes('Director'));
		if (!findDirector) return [];
		const selectItem = findDirector.querySelectorAll("ul > li");
		if (!selectItem) return [];
		return Array.from(selectItem).map(item => item.textContent.trim());

	}


	const getWriters = () => {
		const selectAllUl = document.querySelectorAll('li[data-testid*=title-pc-principal-credit]');
		if (!selectAllUl) return [];
		const findWriters = Array.from(selectAllUl).find(item => item.textContent.includes('Writer'));
		if (!findWriters) return [];
		const selectItem = findWriters.querySelectorAll("ul > li");
		if (!selectItem) return [];
		return Array.from(selectItem).map(item => item.textContent.trim());
	}





	const getCast = () => {
		const selectAllUl = document.querySelectorAll('a[data-testid*=title-cast-item__actor]');
		if (selectAllUl) {
			return Array.from(selectAllUl).map(item => item.textContent.trim());
		} else {
			return [];
		}
	}



	const title = titleFunction();
	const poster = posterFunction();
	const release = releaseFunction();
	const length = getLength();
	const rating = getRating();
	const description = descriptionCalback();
	const category = getCategory();
	const directors = getDirtectors();
	const writers = getWriters();
	const cast = getCast();
	const x = { title, poster, release, rating, length, description, category, directors, writers, cast };
	return x;
}




const myData = async (url) => {
	let browser;
	try {

		browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36');
		// await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0');

		await page.goto(url, {
			timeout: 1800000,
			waitUntil: 'domcontentloaded'
		});

		const result = await page.evaluate(compile);
		return result

	} catch (err) {
		console.error(err);
		return (
			{ message: "Scraping failed", error: err.message },
			{ status: 500 }
		);
	} finally {
		if (browser) await browser.close();
	}
};






router.get("/", async (req, res) => {
	console.log(urls.length);
	const x = [];
	for (let i = 0; i < urls.length; i++) {
		const data = await myData(urls[i].url);
		x.push({ url: urls[i].url, ...data });
		console.log(i + 1);
	}
	res.send(x);
});

module.exports = router;
