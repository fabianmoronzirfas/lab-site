# lab-site
Website for the ideation and prototyping lab


## Watching (scss, js)
grunt watch --force


##Using the boilerplate

Only required param is PROJECT (this will be the name of the new folder).

npm run boilerplate PROJECT="predictions1" 

In the folder "authors" there are several json files for each team member, if the AUTHOR string matches one of the files, the params from the files will automatically be imported

	AUTHOR="sebastianmeier"

Recommended but not required params:

	TYPE="full" (or light)

	DATE="10/2017" 
	GITHUB_URL="population-prediction" 
	TAG_DE="Data Science" 
	TAG_EN="Data Science" 
	PROJECT_TITLE_DE="Datengestützte Prognosen mit offenen Daten" 
	PROJECT_TITLE_EN="Data-driven Predictions based on Open Data" 
	SHORT_TITLE_DE="Datengestützte Prognosen" 
	SHORT_TITLE_EN="Data-driven Predictions" 
	SHORT_SUBTITLE_DE="Datengestützte Prognosen" 
	SHORT_SUBTITLE_EN="Data-driven Predictions" 
	PROJECT_DESCRIPTION_DE="Gute Vorhersagemodelle, speziell im Bereich des Machine-Learning, stützen sich auf große Datenmengen. Welche Rolle spielen staatliche Open Data Datensätze in diesem Kontext?"
	PROJECT_DESCRIPTION_EN="Good prediction models, especially in the domain of machine-learning, are buid upon big data sets. What role can governmental open data play in this context?"

SHORT_SUBTITLE_[LANG] is used for the overview page

Author params:

	TWITTER_HANDLE="seb_meier"
	AUTHOR="Sebastian Meier"
	AUTHOR_BIO_EN="Sebastian Meier is a data scientist at the Technologiestiftung Berlin. He graduated in Communication and Interface Design and is currently finishing his PhD in Geoinformatics at Potsdam University. His research focus lies on spatial data analytics and visualisation as well as human-centred perspectives on software interfaces."
	AUTHOR_BIO_DE="Sebastian Meier ist Data Scientist bei der Technologiestiftung Berlin. Er studierte Kommunikations- und Interface-Design und schließt aktuell seinen Doktor im Bereich der Geoinformatik an der Uni Potsdam ab. Der Fokus von Sebastians Arbeit liegt auf der Analyse und Visualisierung räumlicher Daten, sowie menschzentrierter Perspektiven bei der Entwicklung von Mensch-Maschine-Schnittstellen."
	EMAIL="meier@technologiestiftung-berlin.de"

AUTHOR_IMAGE should refere to an image in the site/images/team/author_[AUTHOR_IMAGE](@2x).png folder:

	AUTHOR_IMAGE="sebastian_meier"

##Going Live

After a project is done, go into the project folder and open the project.json, this includes a "LIVE" attribute, set this to true. Afterwards run the build command:

npm run build



## Seb Boiler Default

npm run boilerplate PROJECT="kitas" AUTHOR="sebastianmeier" TYPE="light" DATE="05/02/2018" GITHUB_URL="kita-explorer" TAG_DE="Offene Daten" TAG_EN="OpenData" PROJECT_TITLE_DE="Berliner Kitas" PROJECT_TITLE_EN="Berlin's Kitas" SHORT_TITLE_DE="Berliner Kitas" SHORT_TITLE_EN="Berlin's Kitas" SHORT_SUBTITLE_DE="Kartenanwendung zur Kita-Suche" SHORT_SUBTITLE_EN="Map-based application for finding Kitas" PROJECT_DESCRIPTION_DE="Die Kita-Suche soll Eltern bei der Suche der passenden Kita unterstützen. Die zeitgemäßen Such- und Filterfunktionen sowie die Kartendarstellung werden durch Daten des Landes Berlin möglich gemacht. Durch Beispiele wie dieses versucht das Ideation &amp;&nbsp;Protoyping Lab den Mehrwert von offenen Daten für Bürger*innen und Verwaltung zu unterstreichen." PROJECT_DESCRIPTION_EN="Kita-Suche should support parents to find the best Kita for their children. The innovative search- and filter-functionality as well as the map-based representation are driven by data from the city of Berlin. Through examples like this, the ideation and prototyping labs hopes to promote the benefits of open data for citizens and the city itself."
