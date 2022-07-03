var bornes = [
    { "nom": "Boulangerie campaillette dijon.jpg", "x": "47.324377426803196", "y": "5.029040749716927", "alt": "251.997" },
    { "nom": "Hôtel de Bretagne dijon.jpg", "x": "47.31988636288924", "y": "5.040121982996752", "alt": "243.564" },
    /*{ "nom": "Mairie dijon.jpg", "x": "0", "y": "0", "alt": "250.564" },*/
    /*{ "nom": "Random bâtiment Strasbourg.jpg", "x": "0", "y": "0", "alt": "0" },*/
    { "nom": "Porte Stanislas Nancy.jpg", "x": "48.69115585206748", "y": "6.17552904382446", "alt": "246" },
    { "nom": "Arc héré Nancy.jpg", "x": "48.69441572905896", "y": " 6.18268347019083", "alt": "inconnue" },
    { "nom": "Arche dijon.jpg", "x": "47.323302114219", "y": "5.0347434178908985", "alt": "245.807" },
    { "nom": "Banque LCL Tulle.jpg", "x": "45.266338188125495", "y": "1.7705654100440575", "alt": "inconnue" },    
    { "nom": "Brivezac sur dordogne lieu dit Peyriget.jpg", "x": "45.00169850940791", "y": "1.839096248070066", "alt": "149.55" },
    { "nom": "Caserne Paris 1.jpg", "x": "48.85467630404854", "y": "2.3475930720990132", "alt": "inconnue" },
    { "nom": "Caserne Paris 2.jpg", "x": "48.854496420713986", "y": "2.34752101020763", "alt": "35.949" },
    { "nom": "Cathédrale nord Clermont-Ferrand.jpg", "x": "45.77887693912433", "y": "3.086040963630065", "alt": "354.056" },
    { "nom": "Cathédrale sud Clermont-Ferrand.jpg", "x": "45.77854875182503", "y": "3.085968979104246", "alt": "inconnue" },
    { "nom": "Cathédrale Tulle.jpg", "x": "45.26798228069819", "y": "1.770754998330699", "alt": "inconnue" },
    { "nom": "Cathédrale de Strasbourg.jpg", "x": "48.581683406099174", "y": "7.75032915300844", "alt": "144.665" },
    { "nom": "Cathédrale notre dame de l'Annonciation Nancy.jpg", "x": "48.6915100891874", "y": "6.185734518077786", "alt": "inconnue" },
    { "nom": "Collège Simone Veil, Cheneraille.jpg", "x": "46.110746800392924", "y": "2.172894382954418", "alt": "531" },
    { "nom": "Cimetière Vert-Saint-Denis.jpg", "x": "48.570239463456566", "y": "2.6129995265003860", "alt": "inconnue" },
    { "nom": "Cimetière de Pont à Mousson.jpg", "x": "48.906322616208115", "y": "6.061355894430302", "alt": "189" },
    { "nom": "Cimetière de Rougnat.jpg", "x": "46.05800360766778", "y": "2.502295936473763", "alt": "inconnue" },
    { "nom": "Croisement rue du cailloux Cesson.jpg", "x": "48.5679623516244", "y": "2.59854884126762680", "alt": "inconnue" },
    { "nom": "Eglise Damelevieres.jpg", "x": "48.55672054161744", "y": "6.3871258777734", "alt": "221" },
    { "nom": "Eglise Saint Julien Tours.jpg", "x": "47.39579030141666", "y": "0.68703430613512", "alt": "inconnue" },
    { "nom": "Eglise Voinsles.jpg", "x": "48.69046824978045", "y": "3.0031793191265366", "alt": "113" },
    { "nom": "Abbaye d'Aubazine.jpg", "x": "45.174444427704536", "y": "1.6702706674570613", "alt": "inconnue" },
    { "nom": "Eglise d'Egleton.jpg", "x": "45.40613279906627", "y": "2.045740906421809", "alt": "653" },
    { "nom": "Eglise de Jard-Sur-Mer.jpg", "x": "46.42029877116087", "y": "-1.573939967121303", "alt": "14" },
    { "nom": "Eglise de Jarnage.jpg", "x": "46.181099783542855", "y": "2.0856175953433667", "alt": "475" },
    { "nom": "Eglise de Maron.jpg", "x": "48.635482212641655", "y": "6.048294863781719", "alt": "inconnue" },
    { "nom": "Eglise de la Savonnières.jpg", "x": "47.347862270298855", "y": "0.5451791839336032", "alt": "47" },
    { "nom": "Eglise lac Xonrupt-Longemer.jpg", "x": "48.07698770534409", "y": "6.945595538189629", "alt": "inconnue" },
    { "nom": "Chapelle du Sacré-Cœur Les Sables d'Olonnes.jpg", "x": "46.496381363378546", "y": "-1.781664803075823", "alt": "9" },
    { "nom": "Ensemble scolaire Foucault Nancy.jpg", "x": "48.69020773713943", "y": "6.187689363489561", "alt": "138.7" },
    { "nom": "Espace culturel charle boizard Puy-l'évêque.jpg", "x": "44.50443263913613", "y": "1.139398128499645", "alt": "127" },
    { "nom": "Faculté de droits Nancy.jpg", "x": "48.69338032911849", "y": "6.176569179097144", "alt": "243.5" },
    { "nom": "Fontaine des bosquets Luneville.jpg", "x": "48.59374855688748", "y": "6.496712058907699", "alt": "234.401" },
    { "nom": "Gare varangéville.jpg", "x": "48.63530817381197", "y": "6.313065383230644", "alt": "inconnue" },
    { "nom": "Hôtel Dieu Paris.jpg", "x": "48.853755621516285", "y": "2.3488648079926646", "alt": "inconnue" },
    { "nom": "Hôtel de ville Luneville.jpg", "x": "48.59184470609504", "y": "6.492129543061259", "alt": "234.038" },
    { "nom": "Institut de Paris 1.jpg", "x": "48.857787576625824", "y": "2.3364224738562243", "alt": "inconnue" },
    { "nom": "Institut de Paris 2.jpg", "x": "48.85720219314348", "y": "2.3365549728264394", "alt": "inconnue" },
    { "nom": "L'église de saint Pierre ès liens, Saint Pierre Cherignat.jpg", "x": "45.974090620103155", "y": "1.606493555451288", "alt": "inconnue" },
    { "nom": "Mairie Nancy.jpg", "x": "48.69318046422626", "y": "6.183653929288364", "alt": "201" },
    { "nom": "Mairie de Boussac.jpg", "x": "46.34810462066158", "y": "2.2139764127809056", "alt": "377" },
    { "nom": "Mairie de Brive-la-Gaillarde.jpg", "x": "45.15940591321425", "y": "1.5338746191322712", "alt": "114" },
    { "nom": "Monument aux morts Col de Laléger.jpg", "x": "46.03894079812632", "y": "1.5900774492641307", "alt": "inconnue" },
    { "nom": "Opéra de Nancy.jpg", "x": "48.69387065179138", "y": "6.184090129993062", "alt": "201.2" },
    { "nom": "Palais des états Dijon.jpg", "x": "47.32146483453007", "y": "5.041555195612352", "alt": "0" },
    { "nom": "Pont de Maron.jpg", "x": "48.63451647695748", "y": "6.042954434662606", "alt": "inconnue" },
    { "nom": "Pont de l'Indre, Azay le rideau.jpg", "x": "47.26038795328215", "y": "0.46464858737402903", "alt": "46" },
    { "nom": "Port Saint Tropez.jpg", "x": "43.273810804217554", "y": "6.638654767545435", "alt": "2" },
    { "nom": "Porte Saint-Georges Nancy.jpg", "x": "48.69232322971854", "y": "6.18818689883684", "alt": "198.5" },
    { "nom": "Porte de la Craffe Nancy.jpg", "x": "48.69886329335995", "y": "6.177775769527502", "alt": "200" },
    { "nom": "Place de la Poste de Pionnat.jpg", "x": "46.1709017397444", "y": "2.02523561373274", "alt": "452" },
    { "nom": "Puit Gassin.jpg", "x": "43.22846211297053", "y": "6.585470407406807", "alt": "189.1" },
    { "nom": "Restaurant Floréal Luneville.jpg", "x": "48.59192445140089", "y": "6.495616200101397", "alt": "inconnue" },
    { "nom": "Route de haraucourt.jpg", "x": "48.649402332266654", "y": "6.33361749523677", "alt": "inconnue" },
    { "nom": "Rue de l'hôtel de Ville Merlines.jpg", "x": "45.64669512124714", "y": "2.460927152602937", "alt": "770" },
    { "nom": "Saint Germain les belles.jpg", "x": "45.613787364189896", "y": "1.4895267670268029", "alt": "424" },
    { "nom": "Square Darcy Dijon.jpg", "x": "47.32384259789241", "y": "5.033475123175144", "alt": "250.977" },
    { "nom": "Stalingrad Paris.jpg", "x": "48.884007465984034", "y": "2.3692692087578098", "alt": "inconnue" },
    { "nom": "Temple protestant Nancy.jpg", "x": "48.68997439564464", "y": "6.177815054827749", "alt": "212.8" },
    { "nom": "Théâtre Strasbourg.jpg", "x": "48.586496243825515", "y": "7.754963834267567", "alt": "140.542" },
    { "nom": "Théâtre de Tulle.jpg", "x": "45.26689425786952", "y": "1.7711660485738887", "alt": "213" },
    { "nom": "Tribunal judiciaire Tulle.jpg", "x": "45.26549613511575", "y": "1.7705296508401507", "alt": "213" },
    { "nom": "Arcade saint epvre Nancy.jpg", "x": "48.69659786152611", "y": "6.180527442810942", "alt": "inconnue" },
    { "nom": "gare de Tulle.jpg", "x": "45.25864746568026", "y": "1.7564337389836062", "alt": "212.944" },
    { "nom": "Saint-Pardoux-les-Cards lieu dit Ecurat.jpg", "x": "46.09659578063166", "y": "2.151974109708316", "alt": "inconnue" },
    { "nom": "lycée Chaptal Paris.jpg", "x": "48.88191186782011", "y": "2.3203378412597293", "alt": "inconnue" },
    { "nom": "musée magnin dijon.jpg", "x": "47.32093375809003", "y": "5.042327624346835", "alt": "244.977" },
    { "nom": "notre dame de la route Fontanières.jpg", "x": "46.110075711149456", "y": "2.5003131524628426", "alt": "549" },
    { "nom": "pont saint julien au bois le pied de lune.jpg", "x": "45.12763325005808", "y": "2.139788836512123", "alt": "564" },
    { "nom": "porte de la Villette 1.jpg", "x": "48.899567539838955", "y": "2.3879697334532493", "alt": "inconnue" },
    { "nom": "porte de la Villette 2.jpg", "x": "48.89806189131463", "y": "2.386320121353912", "alt": "inconnue" },
    { "nom": "rue Georges Toussaint.jpg", "x": "48.637026184569976", "y": "6.323395786801033", "alt": "inconnue" },
    { "nom": "vieux bâtiment Cesson.jpg", "x": "48.56647022256168", "y": "2.6031514429407830", "alt": "inconnue" },
    { "nom": "Église Rosières.jpg", "x": "48.59406696265421", "y": "6.3326936002263480", "alt": "inconnue" },
    { "nom": "Eglise Ducal Nancy.jpg", "x": "48.69761019273807", "y": "6.179054990625346", "alt": "201.5" },
    { "nom": "Caillou, au croisement de la départementale 941 avant St Amand Jartoudeix lieu dit Le Nouhaud.jpg", "x": "45.930435618421875", "y": "1.6514439343206604", "alt": "486" },
    { "nom": "Eglise de Bourganeuf.jpg", "x": "45.95365227898478", "y": "1.7561269287490469", "alt": "446.285" },
    { "nom": "Eglise Savigny-le-temple.jpg", "x": "48.57565646203012", "y": "2.5828722132442183", "alt": "446.285" },
    { "nom": "Mur d'une maison, Savigny-le-temple.jpg", "x": "48.57540668909647", "y": "2.582275549932581", "alt": "446.285" },
    { "nom": "Mairie annexe Villers-sur-Mer.jpg", "x": "49.32142209777034", "y": "-0.004810816742217145", "alt": "16" },
    { "nom": "Poste Villers-sur-Mer.jpg", "x": "49.321971168145666", "y": "-0.004635424620449258", "alt": "13" },
    { "nom": "Eglise Saint-Martin Villers-sur-Mer.jpg", "x": "49.32081501238101", "y": "-0.0059489234901346786", "alt": "17" },
    { "nom": "Eglise Trouville-sur-Mer.jpg", "x": "49.36496910140653", "y": "0.08423655639246685", "alt": "inconnue" },
    { "nom": "Eglise Villerville.jpg", "x": "49.399788230185685", "y": "0.1283282896859487", "alt": "35" },
    { "nom": "Chapelle aux Lierres Cricqueboeuf.jpg", "x": "49.40204829060152", "y": "0.14562449697418453", "alt": "37" },
    { "nom": "La lieutenance Honfleur.jpg", "x": "49.421170121575685", "y": "0.23356644013252456", "alt": "inconnue" },
    { "nom": "Vieux bassin Honfleur.jpg", "x": "49.419892285910144", "y": "0.23231172951945425", "alt": "inconnue" },
    { "nom": "Port Honfleur, grande roue.jpg", "x": "49.42044358506204", "y": "0.23653563043980863", "alt": "6" },
    { "nom": "Eglise Sainte-Catherine Honfleur.jpg", "x": "49.421116753053155", "y": "0.23222286590703345", "alt": "inconnue" },
    { "nom": "Eglise Saint-Leonard Honfleur.jpg", "x": "49.41767729621173", "y": "0.23462518153318015", "alt": "13.12" },
    { "nom": "Eglise Saint Michel Cabourg.jpg", "x": "49.28655779301614", "y": "-0.11818901764315501", "alt": "5" },
    { "nom": "Eglise Saint-Jacques Reims.jpg", "x": "49.25401602301123", "y": "4.028105743516506", "alt": "54.24" },
    { "nom": "Rue Thiers Reims.jpg", "x": "49.258235430284024", "y": "4.027182845538804", "alt": "83.787" },
    { "nom": "Boulevard Foch Reims.jpg", "x": "49.259300262253625", "y": "4.028577824408618", "alt": "85,989" },
    { "nom": "Boulevard Jules Cesar Reims.jpg", "x": "49.26194763914611", "y": "4.029943321971145", "alt": "88.036" },
    { "nom": "Mairie Marcillac la Croisille.jpg", "x": "45.27342087342", "y": "2.031788614138351", "alt": "565" },
    { "nom": "Eglise Luneville.jpg", "x": "48.59245409145298", "y": "6.491950354836047", "alt": "235" },
    { "nom": "Porte Sainte-Catherine Nancy.jpg", "x": "48.69555116601601", "y": "6.189981785359711", "alt": "498.3" },
    { "nom": "Eglise Laneuveville-devant-Nancy.jpg", "x": "48.65708473430285", "y": "6.230961474473358", "alt": "212" },
    { "nom": "Église Notre-Dame-de-Bonsecours Nancy.jpg", "x": "48.676776130888015", "y": "6.199438046661186", "alt": "198.5" },
    { "nom": "Eglise de Saint-Léonard-de-Noblat.jpg", "x": "45.8372362150849", "y": "1.4897999657348913", "alt": "422.78" },
    { "nom": "Parc Buttes-Chaumont 1 Paris.jpg", "x": "48.87956626302113", "y": "2.382545705845382", "alt": "inconnue" },
    { "nom": "Parc Buttes-Chaumont 2 Paris.jpg", "x": "48.88104084686981", "y": "2.382181494112461", "alt": "inconnue" },
    { "nom": "Parc Buttes-Chaumont 3 Paris.jpg", "x": "48.87812707083048", "y": "2.3797859920172764", "alt": "inconnue" },
    { "nom": "Cimetière de Cubjac-Auvezere-Val D'ans.jpg", "x": "45.22418895727475", "y": "0.9365093875520085", "alt": "125" },
    { "nom": "Maison Cubjac-Auvezere-Val D'ans.jpg", "x": "45.23131726897331", "y": "0.9356413844602096", "alt": "inconnue" },
    { "nom": "Eglise Gout-Rossignol.jpg", "x": "45.41338297477797", "y": "0.3838254217898137", "alt": "128" },
    { "nom": "Maison Savignac-les-Églises.jpg", "x": "45.270626930765886", "y": "0.9099424815118606", "alt": "111" },
    { "nom": "Entrée de ville Lorey.jpg", "x": "48.49820351526742", "y": "6.302916032535162", "alt": "inconnue" },
    { "nom": "Mairie Saffais.jpg", "x": "48.55591350550755", "y": "6.311138639826255", "alt": "348" },
    { "nom": "Église Saint-Mard.jpg", "x": "48.505836729230744", "y": "6.304668576547503", "alt": "inconnue" },
    { "nom": "Entrée de ville Lorey.jpg", "x": "48.49820351526742", "y": "6.302916032535162", "alt": "inconnue" },
    { "nom": "École de la Providence Bayon.jpg", "x": "48.47628167914696", "y": "6.312196494163723", "alt": "261" },
    { "nom": "Maison Bayon.jpg", "x": "48.473640057273656", "y": "6.315769053436389", "alt": "265" },
    { "nom": "Eglise Roville-Devant-Bayon.jpg", "x": "48.46682428601606", "y": "6.2907851210356105", "alt": "inconnue" },
    { "nom": "Cimetière Crantenoy.jpg", "x": "48.46735727069716", "y": "6.221811264577388", "alt": "inconnue" },
    { "nom": "Pont du Madon, Haroué.jpg", "x": "48.46608798750506", "y": "6.178784982365115", "alt": "inconnue" },
    { "nom": "Mairie Tantonville.jpg", "x": "48.46944752044825", "y": "6.139309351781766", "alt": "inconnue" },
    { "nom": "Eglise Praye.jpg", "x": "48.43401595110411", "y": "6.10508166697065", "alt": "inconnue" },
    { "nom": "Mairie Badonviller.jpg", "x": "48.49782185346564", "y": "6.894343414203031", "alt": "321" },
    { "nom": "Musée-Atelier Céramique Badonviller.jpg", "x": "48.49749814706286", "y": "6.889259196569152", "alt": "316" },
    { "nom": "Cimetière Badonviller.jpg", "x": "48.49920021025207", "y": "6.895167497513946", "alt": "335" },
    { "nom": "Droguerie Badonviller.jpg", "x": "48.498995652124044", "y": "6.8922101530757915", "alt": "318" },
    { "nom": "Logement social Badonviller.jpg", "x": "48.501506267500616", "y": "6.892074345347664", "alt": "326" },
    { "nom": "Église Fenneviller.jpg", "x": "48.48751097068803", "y": "6.880355468997762", "alt": "319.495" },
    { "nom": "Mairie Pexonne.jpg", "x": "48.48340656037813", "y": "6.865454817848781", "alt": "inconnue" },
    { "nom": "Mairie 10eme arrondissement Paris.jpg", "x": "48.87208439135131", "y": "2.3575274583926142", "alt": "inconnue" },
    { "nom": "Porte saint Martin Paris.jpg", "x": "48.86915742957728", "y": "2.355724956332834", "alt": "inconnue" },
    { "nom": "Place à L'hospice Uzerche.jpg", "x": "45.42716631990667", "y": "1.5655739651639717", "alt": "297" },
    { "nom": "Presbytère Uzerche.jpg", "x": "45.42448843069292", "y": "1.5634837120758152", "alt": "inconnue" },
    { "nom": "Mairie Brunoy.jpg", "x": "48.697836820723246", "y": "2.504271073247553", "alt": "inconnue" },
    { "nom": "Maison Brunoy.jpg", "x": "48.70177604968252", "y": "2.5101553871997595", "alt": "75.61" },
    { "nom": "Gare de Cesson.jpg", "x": "48.565612733978924", "y": "2.5939389677035067", "alt": "inconnue" },
    
    { "nom": "Borne fontaine au croisement rue Bouret et rue Armand carrel Paris.jpg", "x": "48.882793455714285", "y": "2.3716774207995224", "alt": "inconnue" },
    { "nom": "Creche rue Armand carrel Paris.jpg", "x": "48.882618816399564", "y": "2.377804412493506", "alt": "inconnue" },
    { "nom": "Croisement rue Armand Carrel et rue de meaux Paris.jpg", "x": "48.882735395079536", "y": "2.37557826428185", "alt": "inconnue" },
    { "nom": "Croisement rue faubourg saint Martin et rue Eugène Varlin Paris.jpg", "x": "48.879274876638725", "y": "2.363146925030727", "alt": "inconnue" },
    { "nom": "Gare de l'est.jpg", "x": "48.876981751946445", "y": "2.360923083429044", "alt": "inconnue" },
    { "nom": "Parc Buttes-Chaumont 4 Paris.jpg", "x": "48.88266381509211", "y": "2.3847653745901933", "alt": "inconnue" },
    { "nom": "Parc Buttes-Chaumont 5 Paris.jpg", "x": "48.879182993203294", "y": "2.3803512432957707", "alt": "inconnue" },
    { "nom": "Parc Buttes-Chaumont 6 Paris.jpg", "x": "48.87855090465156", "y": "2.3789063388169427", "alt": "inconnue" },
    { "nom": "Place Armand Carrel.jpg", "x": "48.88290232218434", "y": "2.382292666748429", "alt": "inconnue" },
    { "nom": "Rue du Rhin Paris.jpg", "x": "48.88443505650463", "y": "2.3815237020029243", "alt": "inconnue" },
    { "nom": "Rue de meaux, station Laumière Paris.jpg", "x": "48.885138731417626", "y": "2.380221588723829", "alt": "inconnue" },
    { "nom": "Stalingrad 2 Paris.jpg", "x": "48.88313309180583", "y": "2.370283565779968", "alt": "inconnue" },
    { "nom": "Pont de Bercy.jpg", "x": "48.83774817954024", "y": "2.3738583856331883", "alt": "inconnue" },
    { "nom": "Pont de Tolbiac.jpg", "x": "48.832466308401465", "y": "2.3797984119626348", "alt": "30.500" },
    { "nom": "Quai de Bercy.jpg", "x": "48.83870932946213", "y": "2.3755138347266436", "alt": "inconnue" },
    { "nom": "Quai de la râpée.jpg", "x": "48.83954802551557", "y": "2.374721757093692", "alt": "inconnue" },
    { "nom": "Tunnel proudhon.jpg", "x": "48.83693508920345", "y": "2.389421362991972", "alt": "inconnue" },
    { "nom": "Avenue du Président Kennedy, kenclub Paris.jpg", "x": "48.85356663867718", "y": "2.282397857866793", "alt": "inconnue" },
    { "nom": "Croisement Avenue du Président Kennedy, rue d'Ankara Paris.jpg", "x": "48.854398785751734", "y": "2.2836224631462243", "alt": "inconnue" },
    { "nom": "Croisement Boulevard de Belleville, Rue D'Oberkampf Paris.jpg", "x": "48.86714505108471", "y": "2.382545722744368", "alt": "inconnue" },
    { "nom": "Eglise Gimel-les-Cascades.jpg", "x": "45.298985074406964", "y": "1.8513032981901254", "alt": "inconnue" },
    { "nom": "Eglise Vert-Saint-Denis.jpg", "x": "48.56552162001606", "y": "2.6134980651200403", "alt": "inconnue" },
    { "nom": "Gare d'avenue du président Kennedy Paris.jpg", "x": "48.852894635171246", "y": "2.281286362183796", "alt": "inconnue" },
    { "nom": "LCL croisement rue Daniel Stern, boulevard de grenelles Paris.jpg", "x": "48.851054815711244", "y": "2.292807338373962", "alt": "inconnue" },
    { "nom": "Le Reverdi Cesson.jpg", "x": "48.55795986888066", "y": "2.608467134970431", "alt": "inconnue" },
    { "nom": "Pont d'Inéa Paris.jpg", "x": "48.85917169293937", "y": "2.2926313810267227", "alt": "inconnue" },
    { "nom": "Port Debilly, Pont d'Inéa Paris.jpg", "x": "48.86015984392405", "y": "2.2911111519830576", "alt": "28,975" },
    { "nom": "Poste croisement rue du théâtre, rue de Lourmel Paris.jpg", "x": "48.84822681493093", "y": "2.290145817764662", "alt": "inconnue" },
    { "nom": "Rond point Vert-Saint-Denis.jpg", "x": "48.56634465081164", "y": "2.6186002264150114", "alt": "75,80" },
    { "nom": "Rue de Lourmel École Saint Elizabeth Paris.jpg", "x": "48.84288343414814", "y": "2.286131069865411", "alt": "inconnue" },
    { "nom": "Rue de Lourmel, arrêt 42 Charles Michels Paris.jpg", "x": "48.845458670833644", "y": "2.2877329946912397", "alt": "inconnue" },
    { "nom": "Rue Émile Zola Restaurant l'épopée Paris.jpg", "x": "48.84674675528673", "y": "2.288239723665233", "alt": "inconnue" },
    { "nom": "Sortie parc de Belleville rue Julien Lacroix Paris.jpg", "x": "48.87090973409201", "y": "2.383622305829808", "alt": "inconnue" },
]
