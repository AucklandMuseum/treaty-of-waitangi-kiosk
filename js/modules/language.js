define(function(require){
    'use strict'

    var translations = {
        timeline:{ // UPDATED
            t0:{
                heading:[
                    'Timeline',
                    'He Wataka'
                ],
                p1:[
                    'This timeline sets out some of the key events around the Treaty of Waitangi — New Zealand’s founding document. ',
                    'Kei tēnei wātaka ētahi o ngā mahi matua e pā ana ki te Tiriti o Waitangi — te pukapuka taketake o Aotearoa. '
                ],
                p2:[
                    'The Treaty was signed in 1840 by representatives of the British Crown and more than 500 Māori chiefs. It symbolises the unique relationship between the peoples of this nation — a relationship that continues to evolve today. ',
                    'I hainatia te Tiriti i te tau 1840 e ngā rangatira 500, neke atu, o te iwi Māori me te Karauna o Ingarangi. Ka noho hei tohu mō te whanaungatanga motuhake o ngā iwi o tēnei whenua — e mau tonu nei te noho hei hoa tiriti, ā, e whakahoutia tonutia nei, i ēnei rā. '
                ]
            },
            t1:{ // UPDATED
                c1:[
                    '1200s–1700s',
                    '1200 – te rau tau mai i 1700'
                ],
                c2a:[
                    'The people of',
                    'Te tangata whenua'
                ],
                c2b:[
                    'this land',
                    'o tēnei motu'
                ],
                c3:[
                    'During this time period, Māori live in small, self-governing iwi (tribes) around New Zealand. They are descended from Polynesian navigators who arrived here in the late 1200s.',
                    'I tēnei takiwā, ka noho ngā iwi Māori o te motu hei mana motuhake mō rātou anō. He uri rātou nō ngā tūpuna i tere mai i Te Moana nui a Kiwa i ngā tau tōmuri o te rau tau 1200.'
                ],
                c4:[
                    'Māori are tangata whenua — the ‘people of this land’.',
                    'Ko te iwi Māori te tangata whenua.'
                ]
            },
            t2:{ // UPDATED
                c1:[
                    '13 December 1642',
                    '13 Tīhema 1642'
                ],
                c2a:[
                    'Abel Tasman',
                    'He tūtakitanga poto'
                ],
                c2b:[
                    'a brief encounter',
                    'Abel Tasman'
                ],
                c3:[
                    'Dutchman Abel Tasman becomes the first European explorer to discover New Zealand. He anchors in Golden Bay on the northern coast of the South Island but leaves without going ashore, following a bloody encounter with Māori. <br><br>Soon afterwards, a Dutch map-maker gives the country the name ‘Nieuw Zeeland’.',
                    'Ko te Tatimana nei ko Abel Tasman te kaitoro whenua o Ūropi tuatahi kia kite i Aotearoa. Ka tukua e ia tana punga i Te Taitapu, i te Tauihu o te Waka a Māui, engari ka pakanga ngā iwi e rua, ka heke hoki te toto, ā, ka wehe atu ia, kāore anō kia ū mai ki uta. Taro kau iho, ka kitea e tētahi kaihanga mapi i Hōrano he ingoa Tatimana mō te whenua o Aotearoa, arā, nāna i tapa ki te ingoa ‘Nieuw Zeeland’.'
                ],
                c4:[
                    'Dutch merchants hoped a vast southern continent existed in the Pacific, and that it would offer new opportunities for trade.',
                    'Ko te hiahia ia o ngā kaihoko Tatimana kia kitea he whenua tino rahi rawa i te Moana nui a Kiwa, i runga i te wawata kia tauhokohoko taonga rātou i reira.'
                ]
            },

            t3:{ // UPDATED
                c1:[
                    'October 1769',
                    'Oketopa 1769'
                ],
                c2a:[
                    'Captain Cook',
                    'Ka tau mai a'
                ],
                c2b:[
                    'makes landfall',
                    'Kāpene Kuki'
                ],
                c3:[
                    'English explorer James Cook arrives in New Zealand on the ship Endeavour, on the first of three voyages of discovery. He charts New Zealand and provides Europe with its first substantial knowledge of the Māori people. Cook estimates the Māori population at 100,000 — a figure modern historians believe is accurate.',
                    'Ka tau mai te kaitoro whenua Ingarihi a James Cook ki Aotearoa mā runga i tana kaipuke Endeavour. Ko te tuatahi tēnei o ana toronga whenua hou e toru. Ka tuhi mahere ia o Aotearoa katoa, ā, ka whakahoki ia i ngā mōhiotanga tuatahi o te iwi Māori ki ngā whenua o Ūropi.   E ai ki te matapae a Kuki kei tōna 100,000 te taupori o te iwi Māori — e tautoko ana ngā kaituhi tātai kōrero o nāianei i tāna tauanga'
                ],
                c4:[
                    'Tupaia the Tahitian navigator plays a crucial role as interpreter, and is welcomed by some Māori as a tohunga (priest, navigator, scholar).',
                    'Ko te tino kaiwhakamāori o te waka o Kuki ko Tūpaia, he kaiwhakatere nō Tahiti. Ka pōwhiritia a Tūpaia e ētahi Māori hei tohunga ahurewa, tohunga whakatere waka, whakapapa hoki.'
                ],
                c5:[
                    'Cook’s discoveries help forge New Zealand’s later links with Britain. But, for Māori in New Zealand, the visit is a brief interlude in the normal course of life.',
                    'Nā ngā kitenga a Kuki ka takoto he tūāpapa mō ngā hononga o Aotearoa ki Ingarangi i muri mai nei. Engari ki te Māori o Aotearoa, he tūtakitanga poto noa tāna pekanga mai, ka hoki anō ai ki ngā mahi o ia rā.'
                ]
            },

            t4:{ // UPDATED
                c1:[
                    'Early 1800s',
                    'Ngā tau tuatahi mai i 1800'
                ],
                c2a:[
                    'Opportunities',
                    'He whāinga wāhi mō'
                ],
                c2b:[
                    'for trade',
                    'te tauhokohoko'
                ],
                c3:[
                    'Sealers, whalers and missionaries are some of the first to settle in New Zealand, and Māori are quick to see the benefits of trade',
                    'Ko ētahi o ngā tāngata tuatahi ki te noho mai ki Aotearoa ko ngā kaipatu kēkeno, ngā kaipatu tohorā me ngā mihingare, ā, ka kite wawe tonu te Māori i ngā hua o te tauhokohoko.'
                ],
                c4:[
                    'The Ngāpuhi chief Te Pahi, a senior leader from the Bay of Islands, is the first influential Māori leader to have significant contact with British officials. In 1805–06 he spends three months in Sydney, Australia as a guest of Governor Philip King.  King wants protection for British whaling crews in New Zealand, whereas Te Pahi is eager to learn about new technology, English farming techniques, and British laws. His visit helps to convince colonial officials that partnerships with Māori will benefit both sides.',
                    'Ko Te Pahi, rangatira o Ngāpuhi, te rangatira whai mana tuatahi kia whai pānga hira tonu ki ngā āpiha Ingarihi. I ngā tau 1805–06 ka noho ia ki Poihākena, Ahitereiria, mō te toru marama, hei manuhiri mō te Kāwana Philip King.  Kei te hiahia a King kia atawhaitia ngā heremana patu tohorā i Aotearoa, ā, ka hiahia hoki a Te Pahi kia ako i ngā hangarau hou, ngā tikanga ahuwhenua, me ngā ture o Ingarangi. Nā tana noho ka kite tonu ngā āpiha o Ingarangi he mea pai te haere kōtui, hei painga mō ngā iwi e rua.'
                ],
                c5:[
                    'Te Pahi also meets missionary Samuel Marsden and impresses him with his ‘clear, strong and comprehensive mind’. Marsden begins planning a mission in the Bay of Islands.',
                    'Ka tūtaki hoki a Te Pahi ki te mihingare ki a Samuel Marsden (Te Mātenga), ā, ka mīharo a Te Mātenga ki tōna ‘hinengaro mārama, tōna māia, me te matawhānui o te titiro’. Ka tīmata a Te Mātenga ki te whakatakoto tikanga kia tū he mīhana i te Pēwhairangi.'
                ]
            },
            t5:{
                c1:[
                    '1818–1840',
                    '1818–1840'
                ],
                c2a:[
                    'The Musket',
                    'Ngā Pakanga a ngā Iwi i muri i te Taenga mai o te Pū Paura i muri i te Taenga mai o te Pū Paura'
                ],
                c2b:[
                    'Wars',
                    ''
                ],
                c3:[
                    'The use of European muskets changes the face of warfare between Māori tribes.',
                    'Nā te rironga mai o ngā pū Paura (ngā pū paura roroa) ka rerekē katoa te āhua o ngā pakanga a tētahi iwi ki tētahi.'
                ],
                c4:[
                    'Māori are quick to see the advantages these long-barrelled guns give them in combat. By the 1920s, an arms race is in full swing. The Northland tribe Ngāpuhi is the first to acquire a stockpile of hundreds of weapons. Each gun costs as much as 15 pigs — a huge drain on tribal resources.',
                    'He kakama tonu te Māori, ā, ka whāia e ia ēnei pū roroa mō ōna painga maha i te pakanga.  Te taenga ki te ngahuru tau mai i 1820, kua pōnānā ngā iwi ki te hoko pū mā rātou.  I te tuatahi ka riro i a Ngāpuhi te hia rau pū, koia te iwi tuatahi kia whai pū maha. Ko te utu mō ia pū ka eke pea ki te 15 poaka — hei whakarawakore tēnei i te iwi i taua wā.'
                ],
                c5:[
                    'European diseases are the main cause of death among Māori, but thousands also die in the Musket Wars. Many more are enslaved by enemy tribes, or flee their traditional lands, vacating large areas for potential Pākehā settlement. ',
                    'Ko ngā māuiui Pākehā te take matua o te mate i waenga i te Māori, engari tērā anō te tini ka matemate i ngā Pakanga i muri i te taenga mai o te Pū. Ka riro hoki tētahi tokomaha nui kē atu te mauhere, hei mōkai mā iwi kē, ka rere rānei ki takiwā kē, nā reira ka wātea mai ō rātou whenua mō ngā Pākehā noho mai.'
                ]
            },

            t6:{
                c1:[
                    '1834',
                    '1834'
                ],
                c2a:[
                    'The country’s ',
                    'Te haki tuatahi'
                ],
                c2b:[
                    'first flag',
                    'mō te motu katoa'
                ],
                c3:[
                    'Māori chiefs select a flag — a legal requirement for any New Zealand-owned ships which are now trading overseas.',
                    'Ka tahuri ngā rangatira o te iwi Māori ki te kōwhiri haki — he whakaritenga ā-ture taketake mō ngā kaipuke nō Aotearoa ka rere ki tāwāhi ki te hokohoko.'
                ],
                c4:[
                    'The United Tribes flag is the first distinctly New Zealand flag. It is not, however, a truly ‘national’ one. Each iwi (tribe) is self-governing, and there is no sense of a unified country.',
                    'Ko te haki o ngā Iwi Kōtui te haki motuhenga tuatahi nō Aotearoa. Engari, ehara pea i te tino haki ‘mō te motu katoa.’ Ka noho ia iwi hei mana motuhake, ā, kāore i whakaarotia he whenua a Aotearoa kua oti te whakakotahi.'
                ]

            }
            ,

            t7:{//UPDATED
                c1:[
                    '28 October 1835',
                    '28 Oketopa 1835'
                ],
                c2a:[
                    'The Declaration',
                    'Te Whakaputanga o Te'
                ],
                c2b:[
                    'of Independence',
                    'Rangatiratanga o Aotearoa'
                ],
                c3:[
                    'Britain’s representative, James Busby, calls a meeting of predominantly northern Māori chiefs and encourages them to sign a ‘Declaration of Independence’.',
                    'Ka karangatia e te kainoho a Peretānia a Hēmi Puhipi tētahi hui mō ngā rangatira Māori, nō te Tai Tokerau te nuinga, kia haina rātou i tētahi “Whakaputanga o Te Rangatiratanga o Aotearoa’.'
                ],
                c4:[
                    'The document asserts the independence of Niu Tīreni (New Zealand), but also calls on King William IV to be a ‘parent’ of this ‘infant state’.',
                    'E whakaū ana tēnei pukapuka he whenua mana motuhake a Niu Tireni, engari tērā anō hoki tōna inoi ki a Kīngi Wiremu IV kia noho koia hei \'matua\' mō tēnei \'whenua whānau hou\'.'
                ],
                c5:[
                    'Busby’s goal is to prevent the French from establishing their own colony — a very real threat. The signing of the declaration takes Māori a step closer to a binding relationship with Britain.',
                    'Ko te whāinga o Pūhipi he kaupare atu i ngā kōkiri o Wīwī kia tūhono a Aotearoa ki a ia hei koroni — kua tino tūmau aua whakaaro o Wīwī. I runga anō i te hainatanga o te whakaputanga, ka tīmata te takahi i te huarahi o te whanaungatanga ki a Peretānia.'
                ]
            }

            ,

            t8:{
                c1:[
                    '6 February 1840',
                    '6 Hui-tanguru 1840'
                ],
                c2a:[
                    'The Treaty is',
                    'Ka hainatia'
                ],
                c2b:[
                    'signed',
                    'te Tiriti'
                ],
                c3:[
                    'British officials and more than 40 Māori chiefs sign the Treaty of Waitangi in the Bay of Islands. Copies are then sent around the country and signed by approximately 500 rangatira (leaders).',
                    'Ka hainatia te Tiriti o Waitangi e ngā āpiha o Ingarangi, e neke atu hoki i te 40 rangatira Māori i Waitangi, i te Pēwhairangi. Kātahi ka tukua atu he kape ki te motu katoa, ā, ka hainatia e tōna 500 rangatira i rohe kē.'
                ],
                c4:[
                    'Under this founding agreement, New Zealand becomes a British colony and Māori become British subjects. However, Māori and Europeans have different understandings and expectations of the Treaty — particularly in relation to land.',
                    'I raro i tēnei kirimana, ka huri a Aotearoa hei koroni mō Ingarangi, ā, ka huri hoki te iwi Māori hei tangata nō Peretānia. Engari he rerekē ngā māramatanga me ngā tūmanako mō te Tiriti — ko te kaupapa whenua te mea i rerekē noa atu, tētahi i tētahi.'
                ],
                c5:[
                    'Some Māori leaders believe the Treaty will enable more trade or help to limit inter-tribal fighting. Many do not sign, fearing they will lose their independence or power. ',
                    'E whakapono ana ētahi rangatira Māori mā te Tiriti e āwhina ngā mahi tauhokohoko, e pēhi rānei ngā pakanga i waenga i ngā iwi. He tokomaha tonu kāore e haina, i runga i te mataku tērā e tangohia tō rātou rangatiratanga, tō rātou mana rānei. '
                ]
            }

            ,

            t9:{ // UPDATED
                c1:[
                    '1840',
                    '1840'
                ],
                c2a:[
                    'Auckland',
                    'Ka hokona a Tāmaki'
                ],
                c2b:[
                    'changes hands',
                    'Makaurau e iwi kē'
                ],
                c3:[
                    'The Auckland iwi Ngāti Whātua invite Governor Hobson to live in their region. Rangatira Te Kawau offers Hobson tuku rangatira (a chiefly gift) of access to land and resources of 8,000 acres — a vast area encompassing most of Auckland’s central suburbs today.',
                    'Ka tuku pōwhiri a Ngāti Whātua o Tāmaki Makaurau ki a Kāwana Hopihana, i runga i te tūmanako kia whai hangarau hou rātou. Ko te pōwhiri nei kia heke mai ia ki tō rātou rohe noho ai. Ka tāpae takoha whenua a Te Kawau, rangatira o Ngāti Whātua ki a Hōpihana, arā,  8000 eka me ētahi atu rawa. Ko tēnei whenua tino nui ngā takiwā tāone o te manawa o Tāmaki i ēnei rā.'
                ],
                c4:[
                    'The concept of buying land outright is foreign to Māori, who believe they have entered a sharing arrangement. However, Hobson accepts what he understands to be a ‘sale’. As a result, more than a third of the Tāmaki (Auckland) isthmus passes out of Māori hands.',
                    'Kāore hoki te Māori i te mārama ki te whakaaro hoko rawa i te whenua. Ki a rātou, he tikanga tēnei hei whakaū i te noho ngātahi. Ahakoa rā, ka whakaae a Hopihana ki tāna i kī ai, he ‘hoko tūturu’. Nā konei ka riro atu neke atu i te hautoru o te Tāmaki Makaurau i ngā ringa o te iwi Māori.'
                ]
            }

            ,

            t10:{
                c1:[
                    '1840s',
                    'Ngā tau mai i 1840'
                ],
                c2a:[
                    'First signs of',
                    'Ngā tohu tuatahi'
                ],
                c2b:[
                    'conflict',
                    'o te pakanga'
                ],
                c3:[
                    'In the 1840s, battles break out between Māori and Pākehā over sovereignty and land ownership. The conflicts, which intensify in the 1860s, become known as the New Zealand Wars. ',
                    'Ka toro ngā pakanga i waenga i te Māori me te Pākehā mō te rangatiratanga me te pupuri whenua. Ka mōhiotia ēnei ko Ngā Riri Pākehā, ā, i ngā tau mai i 1860 ka hē kē atu.'
                ],
                c4:[
                    'The first Māori–Pākehā conflict after the Treaty signing is a bloody clash at Wairau, near modern-day Blenheim in the north-east of the South Island, in 1843. ',
                    'Ka pakaru mai te pakanga tuatahi i muri i te hainatanga o te Tiriti, i tētahi whakahekenga toto i Wairau, tata ki Waiharakeke, i te raki mā-marangi o Te Waipounamu, i te tau 1843. '
                ],
                c5:[
                    'In March 1845, Ngāpuhi warriors destroy the Northland settlement Kororareka (later named Russell). Other battles take place in Upper Hutt and Whanganui in the southern part of the North Island.',
                    'I te marama o Māehe 1845, ka whakaekea e ngā toa o Ngāpuhi te tāone o Kororāreka i Te Tai Tokerau (i muri ka tapaina ki te ingoa o Russell). Tērā ētahi atu pakanga i Te Awakairangi, me Whanganui, i te tonga o te Ika a Māui.'
                ],
                c6:[
                    'To find out more about the New Zealand Wars see www.teara.govt.nz or www.newzealandwars.co.nz',
                    'Hei rapu i ētahi atu kōrero mō ngā Pakanga o Aotearoa tirohia www.teara.govt.nz,  www.newzealandwars.co.nz rānei'
                ]
            }
            ,

            t11:{
                c1:[
                    '1846',
                    '1846'
                ],
                c2a:[
                    'Growing ',
                    'E tipu ana te'
                ],
                c2b:[
                    'pressure',
                    'ākinga a tētahi taha'
                ],
                c3:[
                    'The Supreme Court states that Māori must officially register their land to prove ownership — customary use is not enough. Any land seen as not being actively cultivated by Māori is deemed ‘waste land’ that rightfully belongs to the Crown. ',
                    'Ka puta te kōrero a te Kōti Mana Nui me mātua rehita tūturu te Māori i tōna whenua — e kore e whai mana te take ahikāroa.   Ko ngā whenua e kīa ana kāore e whakamahia ana e te Māori he ‘whenua koraha’, arā, he whenua Karauna kē. '
                ],
                c4:[
                    'Settlers arrive from Britain in organised migration schemes, and some government agents use dubious practices to persuade Māori to sell. These include threatening military action, and buying from non-owners. ',
                    'Ka taetae mai ngā tauhou mai i Peretānia i raro i ngā kīma whakanoho whenua hou, ā, ko ētahi o ngā huarahi hoko a ngā āpiha kāwanatanga he mahi māminga kē i te Māori kia whakaae ki te hoko. Ko ētahi o ēnei, he kī atu tērā e kōkiritia ō rātou whenua e te hōia, tētahi, he hoko mai i te hunga takekore ki aua whenua. '
                ],
                c5:[
                    'Too late, Māori begin to realise that what they are giving away in land transactions is absolute, sole ownership — a foreign concept.',
                    'Ka mārama te Māori ki te āhua o te hoko a tauiwi, he hoko rawa mō ake tonu atu i te whenua. He whakaaro tino tauhou tēnei ki te hinengaro Māori. '
                ]
            }
            ,

            t12:{
                c1:[

                    '1852',
                    '1852'
                ],
                c2a:[
                    'A king for a ',
                    'He kīngi hei taurite  '

                ],
                c2b:[
                    'queen ',
                    'ki tētahi kūini'
                ],
                c3:[
                    'The devout Christian Tamihana (or Katu), son of Te Rauparaha, travels with missionaries to England where he is presented to Queen Victoria. On his return, along with Wī Tako, Mātene Te Whiwhi and Wiremu Kingi, he begins promoting the idea of a Māori king as a source of national unity. ',
                    'Ka haere tahi te Karaitiana pūmau a Tāmihana (Ko Katu tana ingoa tūturu Māori), tama a Te Rauparaha, ki Ingarangi i te taha o ngā mihingare, a, ka tūtaki ki a Kūini Wikitōria. I tana hokinga mahi ka kawea haeretia e rātou ko Mātene Te Whiwhi, ko Wī Tako, ko Wiremu Kingi, te whakaaro kia tū he kīngi Māori hei mana whakakotahi i te motu katoa. '
                ],
                c4:[
                    'Tāmihana’s aim is to limit land sales to Europeans so the two peoples can live peacefully side by side.',
                    'Te whāinga ia o Tāmihana he pēhi i ngā hoko whenua ki te Pākehā, kia pai ai te noho tahi o ngā iwi e rua. Ahakoa ēnei moemoeā, nō te toronga o te pakanga i Taranaki i 1860, ka huri tuarā ia ki te Kīngitanga.  '
                ]
            }
            ,

            t13:{ // UPDATED
                c1:[
                    'May 1854',
                    'Mei 1854'
                ],
                c2a:[
                    'The first ',
                    'Te pāremata'
                ],
                c2b:[
                    'parliament',
                    'tuatahi'
                ],
                c3:[
                    'New Zealand’s first parliament meets in a cramped building at Mechanics Bay, Auckland.',
                    'Ka huihui te pāremata tuatahi o Aotearoa i tētahi whare kūiti i Mechanics Bay, Tāmaki Makaurau.'
                ],
                c4:[
                    'Under the New Zealand Constitution Act, Māori or Pākehā men who own land worth more than £50 are allowed to vote. Although enlightened for its time, this rule sidelines Māori as their land is mostly communally owned.',
                    'I raro i te Ture Nui o Niu Tīreni 1852, heoi anō te hunga i whakaaetia kia pōti ko ngāi tāne Māori, Pākehā hoki kua whai whenua nui atu te wāriu i te 50 pauna. Ahakoa he mārama tonu te whakaaro, arā, me hāpai ngā taha e rua, ka aukatingia te nuinga o ngāi Māori, nā te mea he mea pupuru ā-hapū, ā-whānau te whenua Māori.'
                ],
                c5:[
                    'There are no Māori among the nation’s MPs. It is not until 13 years later in 1867, that the first Māori MP is sworn in.',
                    'Kāore kau he mema Māori kotahi i roto i ngā mema o Aotearoa. Kia pau rā anō te 13 tau, i 1867, kātahi anō he mema Māori ka whakahua i te oati.'
                ]
            }
            ,

            t14:{  // UPDATED
                c1:[
                    '1858',
                    '1858'
                ],
                c2a:[
                    'The first ',
                    'Te kīngi '
                ],
                c2b:[
                    'Māori king',
                    'Māori tuatahi'
                ],
                c3:[
                    'The Waikato chief Pōtatau Te Wherowhero is declared the first king for Māori, ending a long search for a monarch.',
                    'Ka whakaarahia a Pōtatau Te Wherowhero, ariki o Waikato, hei kīngi tuatahi mō te iwi Māori. Kua roa hoki ngā iwi e rapu ana i tētahi rangatira hei kīngi.'
                ],
                c4:[
                    'It is hoped a king will help halt the loss of land, unite iwi (tribes), and give them more political power.  Calls for a monarch had begun in the early 1850s, when growing numbers of European settlers and demand for land left Māori lacking political power. Mātene Te Whiwhi and Tāmihana Te Rauparaha spent years travelling around the North Island looking for a willing candidate, but most chiefs declined.',
                    'Te tūmanako o te iwi Māori mā tētahi kīngi e pēhi te rironga atu o te whenua, e whakakotahi ngā iwi, māna hoki e pupuri hoki te mana motuhake.  Kua tīmata ngā karanga mō tētahi kīngi i ngā tuatahi mai i 1850, i te pikinga ake o te maha o ngā tauhou Pākehā, me ngā tono whakawātea whenua, i heke ai te mana Māori. I rapua te motu e Mātene Te Whiwhi rāua ko Tāmihana Te Rauparaha huri noa i te Ika a Māui, mō tētahi tangata, engari ka whakakāhoretia te tono e te tini o ngā rangatira.'
                ],
                c5:[
                    'The Kīngitanga — or Māori monarchy — will become one of New Zealand’s most enduring institutions.',
                    'Ka poua i reira te Kīngitanga ki Aotearoa — ā, e tū tonu nei hei pou tapu mō ngā iwi me te motu nui tonu.'
                ]
            }

             ,

            t15:{ // UPDATED
                c1:[
                    'July 1860',
                    'Hūrae 1860'
                ],
                c2a:[
                    'The Kohimarama ',
                    'Te Kawenata o '
                ],
                c2b:[
                    'Covenant',
                    'Kohimarama'
                ],

                c3:[
                    'About 200 Māori meet at Kohimarama, Auckland, to discuss the Treaty of Waitangi and land. ',
                    'Ka huihui ētahi rangatira, tōna 200, mai i ngā tōpito katoa o Aotearoa ki Kohimarama, ki Tāmaki Makaurau, ki te whakawhiti whakaaro mō te Tiriti o Waitangi me te whenua.'
                ],
                c4:[
                    'The organiser, Governor Thomas Gore Browne, is keen to secure loyalty and draw attention away from the Kīngitanga (Māori King movement) and fighting in Taranaki. After much discussion, rangatira (Māori leaders) reaffirm the Treaty of Waitangi and pledge not to act against the British Queen’s sovereignty, in the hope this will reinstate their rights guaranteed by the Treaty of Waitangi. The pledge comes to be known as the Kohimarama Covenant.',
                    'Ka nui te hiahia o Kāwana Koa Parāone kia piri te katoa ki te Kuini, kia kaua hoki e anga atu te titiro ki te Kīngitanga, me ngā pakanga i Taranaki.  Ka haere ngā kōrero nui, ā, ka whakaū ngā rangatira i te piringa ki te Tiriti o Waitangi, me te oati kia kaua e turakina te mana o te Kuini, i runga i te whakaaro, mā konei e whakapūmau ō rātou tika i raro i te Tiriti o Waitangi. Ka kīa tēnei whakapuaki ko te kawenata o Kohimarama.'
                ],
                c5:[
                    'The chiefs also request an annual conference, but this does not happen as the country moves into a decade of civil war.',
                    'Ka tono hoki ngā rangatira kia tū he hui ā-tau, engari kore tonu tērā i tutuki, ā, ka paheke atu te whenua ki te tekau tau e pakanga ana. '
                ]
            }
             ,


            t16:{ // UPDATED
                c1:[
                    '1860s',
                    'Ngā tau mai i 1860'
                ],
                c2a:[
                    'A decade of ',
                    'Tekau tau o te '
                ],
                c2b:[
                    'war',
                    'pakanga'
                ],
                c3:[
                    'The 1860s are the peak of hostilities in the New Zealand Wars. Māori across the country refuse to give up their land, while the Crown tries to stamp out independence movements in Taranaki and Waikato. ',
                    'I te tekau tau mai i 1860 ka toro te pakanga nui, arā, ngā riri Pākehā. Ka whakakāhore te iwi Māori i te hoko me te tuku whenua, ā, ka mahi nui te Karauna ki te takahi atu i ngā mana Māori motuhake o Taranaki me Waikato.'
                ],
                c4:[
                    'Māori who oppose the Crown have about one million hectares of land confiscated.',
                    'Ka raupatuhia te āhua 1 miriona eka whenua o ngāi Māori e whakahē ana ki te Karauna.'
                ]
            }

            ,

            t17:{ // UPDATED
                c1:[
                    'June 1863',
                    'Hune 1863'
                ],
                c2a:[
                    'The Waikato ',
                    'Te whakaekenga '
                ],
                c2b:[
                    'invasion',
                    'o Waikato'
                ],
                c3:[
                    'British forces led by Lieutenant-General Duncan Cameron invade the fertile Waikato region south of Auckland. It is the first step in a crushing campaign that involves more than 18,000 troops and aims to put an end to the Kīngitanga (Māori king movement).',
                    'Ka kōkiri ngā hōia o Ingarangi, i raro i a Rūtene-Tianara Duncan Cameron i ngā whenua haumako o Waikato, ki te tonga o Tāmaki Makaurau. Ko te mahi tuatahi tēnei o tētahi kōkiri nui whakaharahara, he turaki rawa i te Kīngitanga.'
                ],
                c4:[
                    'Governor George Grey sees the Kīngitanga as a threat to colonial authority. He also needs fertile land for the rising tide of immigrants. He uses rumours of a Māori attack on Auckland to convince his British masters to back the invasion, and vows to ‘dig around’ the Kīngitanga until it falls.',
                    'E ai te titiro a Kāwana Hōri Kerei, he whakatumatuma te Kīngitanga ki te mana o te koroni. E hiahia ana hoki ia ki ngā whenua mōmona mō te tini o ngā tauhou e tae mai ana. Ka kawea e ia ngā kōhumuhumu mō tētahi kōkiri Māori ki Tāmaki Makaurau, me kore e whakaae ana rangatira i Ingarangi kia homai ngā hōia me ngā rawa mō te pakanga, me tana kī, ka ‘keria haeretia’ e ia ngā pou o te Kīngitanga kia hinga rā anō ki raro.'
                ],
                c5:[
                    'Auckland’s Great South Road is built as a military supply route.',
                    'Ka hangaia te Great South Road o Tāmaki hei huarahi kawe ō mō te ope hōia.'
                ]
            }
            ,

            t18:{
                c1:[
                    '1863',
                    '1863'
                ],
                c2a:[
                    'With us or ',
                    'He hoa, he hoariri'
                ],
                c2b:[
                    'against us',
                    'rānei koe'
                ],
                c3:[
                    'The government, now at war, hastily passes the New Zealand Settlements Act. This allows the Crown to take land from any North Island Māori ‘in rebellion against Her Majesty’s authority’ and paves the way for the large-scale European settlement of the North Island.',
                    'Ka whakamanaia e te kāwanatanga te Ture Whakatau Manene ki Niu Tīreni, nā te mea, kua pakanga tūturu ia. Nā konei ka `ahei te Karauna ki te tango whenua i tētahi iwi’, ahakoa i hea i te Ika a Māui, ‘e whakatete ana ki te mana o te Kuini’, ā, ko tēnei te huarahi whakawātea i te noho mai o te tini o ngāi Pākehā ki te Ika a Māui.'
                ],
                c4:[
                    'Some prominent Pākehā criticise the Settlements Act from the start. Sir William Martin, the former chief justice, argues that the result will be a ‘brooding sense of wrong’.  ',
                    'Tērā ētahi Pākehā whai mana ka whakahē i te Ture Whakatau Manene mai i te tīmatanga. E ai ki a Tā Willliam William Martin, te tiati matua o mua, ka noho tēnei ‘take mamae mō te ngākau’.  '
                ],
                c5:[
                    'Later, the law is changed so that small areas of land can be awarded to surrendered ‘rebels’.',
                    'Nō muri mai, ka hurihia te ture kia āhei ai te whakawhiwhi whenua iti ki ngā ‘kaiwhakatete’ kua whakahauraro ki te kāwanatanga. '
                ]
            }
            ,

            t19:{ // UPDATED
                c1:[
                    '1877',
                    '1877'
                ],
                c2a:[
                    'A ‘simple ',
                    'He ‘simple '
                ],
                c2b:[
                    'nullity’',
                    'nullity’'
                ],
                c3:[
                    'The Chief Justice of the Supreme Court rules that the Treaty of Waitangi is a ‘simple nullity’ — worthless in the eyes of the law. Judge James Prendergast’s statement is a low point for Treaty relations — influencing government decisions on Treaty issues for decades.',
                    'Ka puta te whakatau a te Kaiwhakawā Mana Nui, ko te Tiriti o Waitangi tētahi ‘simple nullity’ — kāore kau ōna take i raro i te ture. I reira ka tino raru te Tiriti me te noho tahi o ngā hoa Tiriti — ka noho tēnei whakatau hei ture mō ngā whakatau kāwanatanga mō ngā whakatupuranga maha. '
                ],
                c4:[
                    'Prendergast makes his comments in a case involving a request for the return of Māori land at Porirua near Wellington. He rules that the courts cannot consider claims based on ‘native’ title since the Treaty was signed between ‘a civilised nation and a group of savages’.  Many of his conclusions are overturned by the 1900s, but his attitude prevails in official responses to Māori land claims right up to the 1970s.',
                    'Ka puta ana kōrero i roto i tētahi take nui mō te whakahokinga o ētahi whenua Māori, takiwā o Porirua, tata tonu ki Pōneke. I pērā ai tana whakatau kāore e taea e te kōti te whiriwhiri take i runga i te ‘native title’, nā te mea, ki a ia, i hainatia te Tiriti i waenga i ‘tētahi whenua motuhake me tētahi rōpū mohoao.’  Ka huripokina te tini o ana whakatau i te taenga ki te rau tau 1900, engari ka noho tonu iho ana whakaaro i roto i ngā whakautu a ngā āpiha ki ngā kerēme whenua Māori, taea noatia mai ngā tau mai i 1970.'
                ]
            }
            ,

            t20:{
                c1:[
                    '1881',
                    '1881'
                ],
                c2a:[
                    'The attack',
                    'Te kōkiri '
                ],
                c2b:[
                    'on Parihaka',
                    'ki Parihaka'
                ],
                c3:[
                    'Government troops attack the pacifist Māori community of Parihaka, which was set up on confiscated land in the Taranaki region. About 1,600 people are expelled, and their homes destroyed.',
                    'Ka kōkiri ngā hōia tokomaha a te kāwanatanga i te kāinga haumārie o Parihaka. He mea whakatū tēnei tāone i ngā whenua raupatu o Taranaki.  1600 ngā tāngata ka peia atu, ka turakina hoki ō rātou kāinga.'
                ],
                c4:[
                    'The community’s leaders, the prophets Te Whiti and Tohu, are arrested. Te Whiti had led peaceful protests against land confiscations, hoping to make Parihaka ‘Israel’ — a new kingdom for Māori — and reclaim their rangatiratanga (chieftainship) guaranteed by the Treaty. ',
                    'Ka mauheretia ngā poropiti, a Te Whiti rāua Tohu, ngā kaiārahi o te kāinga. Nā Te Whiti i ārahi ētahi whakahē rangimārie ki ngā raupatu whenua, i runga i te tūmanako kia noho ko Parihaka hei ‘Iharaira’ — he kāinga taurikura hou mō te Māori. Ko te tūmanako kia puritia hoki te rangatiratanga i oatitia ai i roto i te Tiriti. '
                ]
            }
            ,

            t21:{
                c1:[
                    '1899',
                    '1899'
                ],
                c2a:[
                    'The South ',
                    'Te pakanga i te '
                ],
                c2b:[
                    'African War',
                    'Tonga o Āwherika'
                ],
                c3:[
                    'New Zealand sends thousands of men to fight in the South African War (or ‘Boer’ War). It is the first time the country has sent troops overseas. Some Māori are eager to join them, and Premier Richard Seddon cites the Treaty as a reason for sending Māori as participants — as equal citizens.',
                    'Ka tonoa e Aotearoa te mano taitamatāne kia whawhai tahi me ngā hōia o Peretānia ki te Tonga o Āwherika, (te pakanga Boer). Kātahi anō a Aotearoa ka tono hōia ki tāwāhi. Tērā anō hoki ētahi Māori e hiahia ana ki te whakapiri atu, me te whakahua a Pirimia Richard Seddon i te Tiriti hei pūtake. Tōna tikanga he tangata whai mana te Māori nō te whenua nui tonu — rite tonu ki te Pākehā, me tū tahi ki te pakanga.'
                ],
                c4:[
                    'Māori MP Wiremu Pere volunteers to lead a Māori contingent of more than 500 soldiers. But this is declined, as British government policy is not to use ‘native’ troops in wars between white groups.  ',
                    'Ka puta te kī a te mema pāremata Māori a Wiremu Pere, māna e ārahi te ope Māori, neke atu i te 500 hōia, ki reira. Heoi anō, ka whakakāhoretia tana tono, inā hoki, ko te kaupapa taketake i Peretānia kia kaua e tukua ngā hōia ‘native’ kia pakanga ki ngā hoariri kiritea.  '
                ],
                c5:[
                    'About 20 Māori end up fighting with the New Zealand troops — most have Pākehā names.',
                    'Tata ki te 20 ngāi Māori i whawhai tahi me ngā hōia Pākehā o Aotearoa, — ā, he ingoa Pākehā tō te nuinga.'
                ]
            }
            ,

            t22:{
                c1:[
                    '1914',
                    '1914'
                ],
                c2a:[
                    'From one king ',
                    'Mai i tētahi '
                ],
                c2b:[
                    'to another',
                    'kīngi ki tētahi'
                ],
                c3:[
                    'The Māori King, Te Rata Mahuta, sails to London and makes a direct appeal to King George V over land grievances. The response from the British government is the same as it has been for decades: this is a matter for the New Zealand government to decide.',
                    'Ka tere atu te Kīngi Māori, a Te Rata Mahuta, ki Rānana, me tana tono hāngai ki a Kīngi Hōri te Tuarima kia whakatikaina ngā nawe whenua. Ka hoki mai ko taua whakautu anō o ngā tau o mua, mai i kāwanatanga o Peretānia: he take tēnei hei whiriwhiri mā te kāwanatanga o Aotearoa.'
                ]
            }
            ,

            t23:{
                c1:[
                    '1914–18',
                    '1914–18'
                ],
                c2a:[
                    'World ',
                    'Te Pakanga '
                ],
                c2b:[
                    'War I',
                    'Tuatahi o Te Ao'
                ],
                c3:[
                    'When World War I breaks out, Māori have mixed views about taking part. Some rush to sign up. But many from Taranaki and Waikato-Tainui refuse to fight for a Crown that confiscated their land in the 1860s. Some remember the words of King Tāwhiao, who had called for peace after the bloodshed of the New Zealand Wars — forbidding his people to take up arms again:',
                    'Nō te toronga mai o te Pakanga Tuatahi o te Ao, ka rangirua te iwi Māori mō tana whāinga wāhi atu. Ko ētahi, i rere ki te haina kia haere. Engari te tini anō o Taranaki, o Waikato-Tainui, kāore rawa i whakaae ki te whawhai mō te Karauna nāna ō rātou whenua i raupatu, i ngā tau mai i 1860. Ko ētahi ka maumahara ki ngā kupu a Kīngi Tāwhiao, nāna te tongi mō te katinga i te hekenga ā-toto — i whakakāhoretia e ia te mau rākau whaiwhai a tana iwi mō ake tonu atu:'
                ],
                c4:[
                    '"The killing of men must stop; the destruction of land must stop. I shall bury my patu in the earth and it shall not rise again ... Waikato, lie down. Do not allow blood to flow from this time on."',
                    '"The killing of men must stop; the destruction of land must stop. I shall bury my patu in the earth and it shall not rise again ... Waikato, lie down. Do not allow blood to flow from this time on."'
                ],
                c5:[
                    'When conscription is introduced in 1916, Waikato-Tainui are the only Māori forced to join the troops.',
                    'Nō te whakaurunga mai o te māpere i te tau 1916, ko Waikato-Tainui anake te iwi ka whakahautia kia whakauru atu hei hōia.'
                ]
            }
            ,

            t24:{
                c1:[
                    '1915',
                    '1915'
                ],
                c2a:[
                    'Land for ',
                    'He whenua mō ngā '
                ],
                c2b:[
                    'returned soldiers',
                    'hōia hoki mai i te pakanga'
                ],
                c3:[
                    'The government passes the Crown Discharged Soldiers Settlement Act — a law that allows it to gift land to returned soldiers for farming. Most is allocated to Pākehā soldiers, as it’s assumed Māori veterans have tribal land already available to them.',
                    'Ka whakamanaia e te kāwanatanga te Crown Discharged Soldiers Settlement Act — he ture e āhei ai ia ki te tāpae whenua ki ngā hōia hoki mai i te pakanga, hei mahi ahuwhenua. Ko te nuinga ka tukua ki ngā hōia Pākehā, i runga i te whakaaro e wātea mai ana he whenua ā-iwi ki ngā hōia Māori.'
                ],
                c4:[
                    'Some large parcels of confiscated Māori land are given to veterans via a ballot. More than 10,000 men are assisted onto the land by 1924. ',
                    'Ko ētahi poraka whenua raupatu nunui tonu ka tukua ki ēnei hōia, mā te māpere.  Tae rawa ake ki te tau 1924 neke atu i te 10,000 ngā tāngata i āwhinatia kia mahi ahuwhenua. '
                ]
            }
            ,

            t25:{
                c1:[
                    '1939–45',
                    '1939–45'
                ],
                c2a:[
                    'World ',
                    'Te Pakanga '
                ],
                c2b:[
                    'War II ',
                    'Tuarua o Te Ao '
                ],
                c3:[
                    'Nearly 16,000 Māori enlist for service in World War II. The Māori Battalion becomes one of the most celebrated units in New Zealand military history. The remarkably high casualty rate is devastating for Māori communities across the country.',
                    'Tata ki te 16,000 ngāi Māori ka rēhita mō Te Pakanga Tuarua o Te Ao. Ka noho ko te Ope Rua Tekau mā Waru tētahi o ngā ope hōia nunui rawa i roto i ngā hītori o Aotearoa. Ka tino whiua ngā kāinga Māori puta noa i Aotearoa e ngā mahi a Aituā, ā, ka hinga te tini o ā rātou taitama i te pakanga.'
                ],
                c4:[
                    'Many view the war as a positive step forward for race relations. Māori leader Āpirana Ngata stresses that Māori participation in World War I was the price of citizenship; after the Second World War it was clear that Māori had paid in full. ',
                    'Ki te titiro a te tini, nā ngā āhuatanga o te pakanga ka ahu whakamua te noho tahi o ngā iwi e rua. Ka whakaū a Āpirana Ngata i te whakaaro ko te hounga atu o te Māori ki te Pakanga Tuarua o Te Ao te utu mō te noho hei tangata mō Aotearoa; ka mārama ki te katoa kua tino ea, i te Pakanga Tuarua o Te Ao.'
                ]
            }
            ,

            t26:{ // UPDATED
                c1:[
                    '1975',
                    '1975'
                ],
                c2a:[
                    'The land ',
                    'Te hīkoi mō '
                ],
                c2b:[
                    'march',
                    'te whenua Māori'
                ],
                c3:[
                    'Northland kuia (elder) Whina Cooper leads an 800-kilometre protest march in support of Māori land rights. The peaceful hīkoi travels from the Far North to parliament in Wellington, where thousands of people call for the government to honour the Treaty.',
                    'Nā te kuia o Te Tai Tokerau nā Whina Cooper i ārahi te hīkoi 800 kiromita te roa i te mata o te whenua, mai i te Hiku o Te Ika ki Te Whanga-nui-a-Tara, hei tautoko i ngā whāinga tika o te Māori ki ōna whenua. Ka heke mai i te Tai Tokerau ki te Whare Pāremata, i reira ka puta te karanga kia whakahōnore te kāwanatanga i te Tiriti o Waitangi.'
                ],
                c4:[
                    'The 1970s usher in a new awareness of Treaty issues. Protest groups such as Ngā Tamatoa call for the teaching of Māori language and culture in schools, and call for the government to honour the Treaty.',
                    'I ngā tau 1970 ka whiti te rā mō te Tiriti o Waitangi. Ka puta te karanga o ngā rōpū pēnei i Ngā Tamatoa kia ākona te reo Māori me ngā tikanga i roto i ngā kura, kia whakahōnore hoki te kāwanatanga i te Tiriti. '
                ]
            }
            ,

            t27:{
                c1:[
                    '1977–78',
                    '1977–78'
                ],
                c2a:[
                    'Bastion Point',
                    'Ko '
                ],
                c2b:[

                    'a landmark protest',
                    'Takaparawhau'
                ],
                c3:[
                    'Members of the Auckland iwi (tribe) Ngāti Whātua occupy land at Bastion Point, Ōrākei, for 17 months. They are eventually evicted in the country’s largest police operation up to that time. The Crown later admits the land had been unfairly acquired.',
                    'Nā tētahi iwi o Tāmaki Makaurau, nā Ngāti Whātua, i whakatū puni ki runga o Takaparawhau. Nā te ope pirihimana nui rawa ki Aotearoa rātou i pei atu. I ngā tau o muri mai ka whakaae te Karauna kāore i tika tāna tango i te whenua.'
                ]
            }
            ,

            t28:{ // UPDATED
                c1:[
                    '1975',
                    '1975'
                ],
                c2a:[
                    'Healing the past,',
                    'Te rapu rongoā mō ō '
                ],
                c2b:[
                    'building a future',
                    'mua hē, me te titiro whakamua'
                ],
                c3:[
                    'The government sets up the Waitangi Tribunal to investigate Crown breaches of the Treaty. At first it only considers recent breaches. But in 1985, it starts hearing claims dating back to 1840. ',
                    'I whakatūria e te kāwanatanga te Rōpū Whakamana i te Tiriti hei tūhura i ngā takahitanga o te Tiriti. I te tuatahi ka tirohia ko ngā takahitanga o ēnei tau tata anake. Engari i te tau 1985, ka tīmata tana whakarongo ki ngā take, hoki rawa atu ki 1840. '
                ],
                c4:[
                    'Settlements usually include some land returns, compensation and an apology from the Crown. Some New Zealanders complain that the process unfairly benefits a few. Many others see it as a unique attempt to made amends for colonial injustices.',
                    'I roto i ngā whakatau maha, he whakahokinga whenua, he kāpiheihana, me tētahi whakapāha nā te Karauna. Ka puta ngā kōamuamu o ētahi o Aotearoa, ka hoki ngā painga ki te rōpū iti noa. Ko ētahi e kī ana, he rapunga motuhenga tēnei i te tika mō ngā hē o ngā tau tōmua o te Pākehā ki Aotearoa.'
                ],
                c5:[
                    'The settlement with Waikato-Tainui tribes includes a formal apology from Queen Elizabeth II. It is the first time the Crown has apologised to an indigenous people.',
                    'I raro i te whakatau ki ngā iwi o Waikato-Tainui tētahi whakapāha ōkawa nā Kūini Irihāpeti II. Kātahi anō te Karauna ka tuku whakapāha ki tētahi iwi taketake, huri noa i te ao.'
                ],
                c6:[
                    'To learn more about this contemporary process and the Office of Treaty Settlements, visit www.govt.nz/organisations/office-of-treaty-settlements/',
                    'Kia ako ai koe i ētahi atu kōrero mō ēnei whakaritenga i ēnei rā, me te Tari Whakatau Take e Pā ana ki te Tiriti o Waitangi, peka atu ki www.govt.nz/organisations/office-of-treaty-settlements/'
                ]
            }

        },

        treaty:{ // UPDATED
            splash:{
                heading:[
                    'The Tre<span>a</span>ty',
                    'Te Tiriti'
                ],
                p1:[
                    'The English and Māori versions of the Treaty of Waitangi differ in significant ways. ',
                    'Tērā ngā āhuatanga rerekē o te kaupapa reo Pākehā me te kaupapa reo Māori o Te Tiriti o Waitangi. '
                ],
                p2:[
                    'For instance, ‘kāwanatanga’ in the Māori version is usually translated as ‘government’. But the English version refers to absolute sovereignty — supreme rule over the entire country. This idea would have been alien to most Māori. Also, ‘tino rangatiratanga’ — chiefly authority or chieftainship — is promised in the Māori but not the English version. These differences become particularly apparent when the Māori is retranslated into modern English.',
                    'Inā koa, ko te whakapākehātanga o te kupu ‘kāwanatanga’ i te kaupapa reo Māori ko ‘government’. Engari e kōrero ana te kaupapa reo Pākehā mō te mana motuhake — te tino rangatiranga matua o tētahi whenua katoa. E kore tēnei kaupapa e mārama ki te nuinga o te Māori. Waihoki ngā kupu, ‘tino rangatiratanga’ — te mana rangatira — kei te whakaaetia i runga i te kī taurangi i te kaupapa reo Māori, engari i te kaupapa reo Pākehā, kore kau. Ka tino mārama ēnei rerekētanga i te whakapākehātanga o te kaupapa reo Māori.'
                ],
                p3:[
                    'Today, when the Waitangi Tribunal investigates Māori claims about Crown breaches of the Treaty, it refers to both the English and Māori versions.',
                    'I ngā tūhuratanga a Te Rōpū Whakamana i Te Tiriti i ngā takahitanga Tiriti i ēnei rā, ka titiro te rōpū ki ngā kaupapa e rua, arā, ngā kupu o te kaupapa reo Pākehā, me te kaupapa reo Māori. '
                ]
            }
        },

        signing:{ // UPDATED
            splash:{
                heading:[ // updated
                    'Signed around the country',
                    'I hainatia huri noa i te motu'
                ],

                p1:[
                    'The Treaty of Waitangi was signed in different parts of New Zealand, including Auckland. After the original document was signed at Waitangi in the Bay of Islands on 6 February 1840, eight copies were taken around the country.',
                    'I hainatia te Tiriti o Waitangi i ngā wāhi maha o Aotearoa, tae atu ki Tāmaki Makaurau. Nō muri mai i te hainatanga o te pukapuka taketake i te Pēwhairangi i te 6 Pēpuere 1840, ka haria haeretia ētahi kape e waru huri noa i te motu.'
                ],
                p2:[
                    'More than 500 Māori signed — including 13 women. Others refused.',
                    'Neke atu i te 500 ngāi Māori i haina — tae atu ki te 13 wāhine. Ko ētahi atu i whakakāhore rawa.'
                ],
                p3:[
                    'See the locations on the map, and explore where it was signed in Auckland.',
                    'Tūhuratia tēnei mapi kia kitea ngā wāhi, nōnahea hoki i hainatia ia Tiriti.'
                ]
            },
            waitangi:{ // updated
                location:[
                    'Waitangi sheet',
                    'He kape nō Waitangi'
                ],
                date:[
                    'Signed on 4 March and 9 July 1840',
                    'I hainatia i 4 March me 9 July 1840'
                ],
                p1:[
                    'The original Treaty document, signed at Waitangi on 6 February 1840, was taken around Northland then south to Tāmaki Makaurau (Auckland) and the Hauraki Gulf. By September, about 240 Māori had signed, including two women.',
                    'I kawea haeretia te pukapuka Tiriti taketake i hainatia i te 6 Pēpuere 1840 ki te Tai Tokerau, ā, i muri ki te tonga ki Tāmaki Makaurau, mutu rawa atu ki te Moana o Tīkapa. Tae rawa ake ki Hepetema, āhua 240 ngāi Māori kua haina, tae atu ki ētahi wāhine tokorua.'
                ],
                p2:[
                    'When space ran out on the single sheet of parchment, Captain Nias and Colonial Treasurer George Cooper added a second sheet. This was used to gather signatures at Karaka Bay.',
                    'Nō te paunga o ngā rārangi wātea i te puka kirikararehe kotahi, ka tāpiritia e Captain Nias o te Herald rāua ko George Cooper, Kaitiaki Moni o te Koroni, tētahi rau tuarua. I whakamahia tēnei hei kohi mō ngā hainatanga ingoa e rua ki Tāmakimakaurau, tae atu ki Karaka Bay, i te 4 Māehe 1840.'
                ]
            },
            manukau:{ // updated
                location:[
                    'Waikato–Manukau sheet',
                    'He kape nō Waikato-Manukau'
                ],
                date:[
                    'Signed on 20 March 1840',
                    'I hainatia i 20 March 1840'
                ],
                p1:[
                    'In March 1840, the missionary Robert Maunsell received this document — the only English copy of the Treaty circulated. It was signed by 32 Waikato chiefs, and seven more somewhere on the Manukau Harbour (Auckland).',
                    'I te marama o Māehe 1840, ka whiwhi a Robert Maunsell i tēnei pukapuka — heoi anō nei te kape reo Pākehā o te Tiriti i haria haeretia ki ngā iwi. I hainatia e ngā rangatira 32 o ngā rangatira o Waikato, ā, tokowhitu anō i haina i Manukau (Tāmaki Makaurau). Heoi anō te kape reo Pākehā i tukua kia hainatia e ngā iwi ko tēnei.'
                ],
                p2:[
                    '',
                    ''
                ],
                p3:[
                    '',
                    ''
                ]
            },
            'manukau-harbour':{ //updated
                location:[
                    'Manukau–Kāwhia sheet',
                    'He kape nō  Manukau-Kāwhia'
                ],
                date:[
                    'Signed on 26 April 1840',
                    'I hainatia i 26 April 1840'
                ],
                p1:[
                    'On the Manukau Harbour in March 1840, Captain William Symonds gathered signatures from three chiefs from the Auckland iwi (tribe) Ngāti Whātua: Kawau, Tinana and Rēweti. Missionaries James Wallis and John Whiteley obtained 10 more signatures at Kāwhia between April and September, bringing the total to 13.',
                    'I Manukau, i te marama o Māehe 1840, ka kohia e Kāpene Wiremu Symonds ngā hainatanga ingoa o ētahi  rangatira tokotoru nō te iwi o Ngāti Whātua, o Tāmaki Makaurau: o Kawau, o Tinana me Rēweti. I riro i ngā mihingare i a James Wallis rāua ko John Whiteley ētahi atu hainatanga ingoa 10 i Kāwhia i waenga i ngā marama o Āperira me Hepetema, huia katoatia 13 ngā ingoa.'
                ],
                p2:[
                    '',
                    ''
                ],
                p3:[
                    '',
                    ''
                ]
            }
        },

        landloss:{ // UPDATED
            intro:{
                heading:[
                    'A loss of land',
                    'Te rironga atu o te whenua ia tau'
                ],
                p1:[
                    'This map shows the dramatic loss of Māori-held land in the North Island between 1840 and 2000. The biggest changes in ownership occurred in the first 30 years.\
                        <br><br>\
                        Thanks to the NZ History website, www.nzhistory.net.nz, for the use of this map and information.',
                    'Hei tēnei mapi ka kitea te rironga ā-waipuke o te whenua Māori i te Ika ā Māui i waenga i ngā tau 1840 me te tau 2000. Ko te ngaromanga o te rangatiratanga o te whenua, i takea mai i ngā tau 30 tuatahi i muri i te hainatanga. '
                ]
            },

            p1:{
                t1:[
                    'Māori land in',
                    'Ngā whenua Māori'
                ],
                p1:[
                    'In 1860 Māori held about 80% of land in the North Island. Much of the land owned by Europeans had been bought or confiscated by the Crown. For most of the previous two decades, only the Crown could buy land from Māori (as agreed in the Treaty of Waitangi). Sales between individuals were not permitted.\
                        <br><br>\
                        Slide the bar on the right to see land loss over time.',
                    'I te tau 1860 i te Māori te 80% o ngā whenua i te Ika a Māui. Tētahi wāhi tino nui o ngā whenua ka kitea i konei, i ngā ringaringa o te Pākehā i taua wā, nā te Karauna i hoko, i raupatu rānei. Mō te nuinga o ngā tekau tau e rua o mua atu, ko te Karauna anake te mana hoko whenua i te Māori (i runga anō i ngā whakaaetanga o te Tiriti o Waitangi). Kāore i whakaaetia ngā hoko ā-tangata takitahi.'
                ]
            },
            p2:{
                t1:[
                    'Māori land in',
                    'Ngā whenua Māori'
                ],
                p1:[
                    'In 1890 Māori held about 40% of the North Island — half the amount of 30 years earlier. The New Zealand Wars of the 1860s had given growing numbers of European settlers the chance to move onto Māori land. More than 4 million acres were confiscated by the Crown in this period, including large areas of the Waikato.\
                        <br><br>\
                        Slide the bar on the right to see land loss over time.',
                    'I te tau 1890 i te Māori anō tētahi 40% o te Ika a Māui — kotahi haurua noa iho o te 30 tau i mua. Nā ngā pakanga whenua o ngā tau mai i 1860, ka wātea mai ngā whenua o te iwi Māori hei nohonga mō ngā tauhou Pākehā, kia pai ai tā rātou nuku mai ki te whenua. Neke atu i te 4 miriona eka i raupatutia i tēnei takiwā, tae atu ki ngā wāhi maha o Waikato.'
                ]
            },
            p3:{
                t1:[
                    'Māori land in',
                    'Ngā whenua Māori'
                ],
                p1:[
                    'In 1910 Māori held about a quarter (27%) of the North Island. The rate of loss between 1890 and 1910 was slower than before, but there were still big purchases. Auckland was one area where a large Māori population had very little land left.\
                        <br><br>\
                        Slide the bar on the right to see land loss over time.',
                    'I te tau 1910 i te Māori tētahi koata, 27%, o ngā whenua o te Ika a Māui. I pōrori kē atu te rironga atu i waenga i 1890 me 1910 i tō mua āhua, engari he hoko nui tonu i aua tau.  Ko Tāmaki Makaurau tētahi takiwā he tino iti noa ngā whenua i te toe.'
                ]
            },
            p4:{
                t1:[
                    'Māori land in',
                    'Ngā whenua Māori'
                ],
                p1:[
                    'In 1939 Māori held about 9% of the North Island. Land now passed to Europeans through various Māori  land boards and trustees. Māori leaders such as Āpirana Ngata had worked hard to stop the flow, but sales didn’t slow until about 1928.\
                        <br><br>\
                        Slide the bar on the right to see land loss over time.',
                    'I te tau 1939 i te Māori te 9% o ngā whenua i te Ika a Māui. I riro atu ngā whenua i te Pākehā rā roto i ngā poari whenua Māori, me ngā poari kaitiaki. I mahi nui ngā rangatira Māori pēnei me Āpirana Ngata ki te aukati i te ngaro o te whenua, engari kīhai ngā hoko i mimiti, nō te tau 1928 rā anō.'
                ]
            },
            p5:{
                t1:[
                    'Māori land in',
                    'Ngā whenua Māori i te tau'
                ],
                p1:[
                    'In 2000 Māori owned only a fraction of the North Island — perhaps 4%. Throughout the 20th century, the Crown had taken land for public works. Sometimes, Māori gifted land to the Crown for specific purposes, such as schools. Such land has not always been returned.\
                        <br><br>\
                        Slide the bar on the right to see land loss over time.',
                    'I te tau 2000 i te Māori tētahi maramara iti o te Ika a Māui — tōna 4%. Puta noa i te rau tau 20, he tango whenua te Karauna mō ngā mahi tūmatanui. I ētahi wā, ka takohatia e te Māori he whenua ki te Karauna mō ana mahi, pēnei i ngā kura. Kāore i whakahokia ēnei whenua ina mutu tētahi kaupapa. '
                ]
            }
        },

        splash:{ // UPDATED
            page1:{
                t1:[
                    'Treaty of <br>Waitangi',
                    'Tiriti o <br>Waitangi'
                ],
                t2:[
                    'a living document',
                    'He pukapuka ora tonu'
                ]
            },

            page2:{
                p1:[
                    'Touch the screen to find out more about the Treaty of Waitangi — how it has shaped the past and will shape the future of the people of Auckland and New Zealand.',
                    'Tēnā whakapā atu ki te mata kia kite ai koe i ētahi atu kōrero mō Te Tiriti o Waitangi — he pēhea ia i tārei ai i ngā tau o mua, he pēhea hoki e tārei ai i te ao hou o Tāmaki Makaurau me Aotearoa, hei a raurangi.'
                ],
                p2:[
                    'Follow the Treaty’s journey around the country in 1840, hear personal stories from local iwi (tribes), and explore a timeline of some of the most dramatic events in New Zealand\'s history.',
                    'Whāia te haerenga o te Tiriti huri noa i te motu i te tau 1840, ā, whakarongo ki ngā tātai kōrero o tēnā iwi, o tēnā iwi, me te tūhura i ngā mahi nui whakaharahara o ō tātou tātai kōrero.'
                ]
            }
        },

        menu:{ // UPDATED
            'menu-items':{
                t1:[
                    'The <br>Treaty',
                    'Te <br>Tiriti'
                ],
                t2:[
                    'In their <br>own words',
                    'Ā rātou <br>kupu ake'
                ],
                t3:[
                    'Timeline',
                    'He <br>Wātaka'
                ],
                t4:[
                    'Signing <br>Sites',
                    'Ngā wāhi <br>i hainatia ai'
                ],
                t5:[
                    'Land <br>Ownership',
                    'Te pupuri <br>whenua'
                ]
            }
        },

        media:{ // UPDATED
            splash:{
                t:[
                    'In their <br>own words ',
                    'A ratou <br>kupu ake' //'Ā rātou <br>kupu ake'

                ],
                p:[
                    'View these short interviews to learn more about the impact the Treaty of Waitangi has had on Tāmaki Makaurau, Auckland iwi. ',
                    'Mātakina ēnei uiuinga poto kia ako koe i ētahi pānga o te Tiriti o Waitangi ki ngā iwi o Tāmaki Makaurau.'
                ]
            }
        }
    }


    var self = {
        lang:0, // 0 = eng, 1 = maori
        init:function (){
            this.set('eng');
        },

        set: function (lang){
            var translationParent, translationGroup, translation, copy;
            this.lang = (lang == 'eng')? 0 : 1;
            $('body').attr('data-language', lang);

            $('[data-translation-parent]').each(function (){
                translationParent = $(this).attr('data-translation-parent');

                $(this).find('[data-translation-group]').each(function (){
                    translationGroup = $(this).attr('data-translation-group');

                    $(this).find('[data-translation]').each(function (){
                        translation = $(this).attr('data-translation');
                        copy = translations[translationParent][translationGroup][translation][self.lang];
                        $(this).html(copy);
                    })
                })
            })
        }
    };

    return self;
});

