<template>
    <div class="members">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Program Committee Members</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <table class="table">
                        <tr>
                            <th>Name</th>
                            <th>University</th>
                            <th>Country</th>
                        </tr>
                        <tr v-for="member in members" :key="member.name">
                            <td><a :href="'mailto:'+member.email">{{member.name}}</a></td>
                            <td>{{member.university}}</td>
                            <td>{{member.country}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>

export default {
    name: 'Members',
    data: function () {
        return {
            members: [
                {name:'Mirko Marras', email:'mirko.marras@unica.it',university:'University of Cagliari',country:'Italy'},
                {name:'Zitao Liu', email:'zitao.jerry.liu@gmail.com',university:'TAL Education Group',country:'China'},
                {name:'Andrew Lan', email:'andrewlan@cs.umass.edu',university:'University of Massachusetts Amherst',country:'United States'},
                {name:'Jeff Matayoshi', email:'jeffrey.matayoshi@aleks.com',university:'McGraw-Hill Education',country:'United States'},
                {name:'Nathalie Guin', email:'nathalie.guin@univ-lyon1.fr',university:'Université Claude Bernard ',country:'France'},
                {name:'Ramkumar Rajendran', email:'ramkumar.rajendran@iitb.ac.in',university:'IIT Bombay',country:'India'},
                {name:'Adeniran Adetunji', email:'r01aba17@abdn.ac.uk',university:'University of Aberdeen',country:'United Kingdom'},
                {name:'Giora Alexandron', email:'giora.alexandron@weizmann.ac.il',university:'Weizmann Institute of Science',country:'Israel'},
                {name:'Benedict Duboulay', email:'b.du-boulay@sussex.ac.uk',university:'University of Sussex',country:'United Kingdom'},
                {name:'Carrie Demmansepp', email:'demmanse@ualberta.ca',university:'University of Alberta',country:'Canada'},
                {name:'Rawad Hammad', email:'R.Hammad@uel.ac.uk',university:'University of East London',country:'United Kingdom'},
                {name:'Bradford Mott', email:'bwmott@ncsu.edu',university:'NC State University',country:'United States'},
                {name:'Martin Hlosta', email:'martin.hlosta@open.ac.uk',university:'The Open University',country:'United Kingdom'},
                {name:'Fuhua Lin', email:'oscarl@athabascau.ca',university:'Athabasca University',country:'Canada'},
                {name:'Thomas Price', email:'twprice@ncsu.edu',university:'NC State University',country:'United States'},
                {name:'Ningyu Zhang', email:'ningyu.zhang@vanderbilt.edu',university:'Vanderbilt University',country:'United States'},
                {name:'Fabiano Dorça', email:'fabianodor@ufu.br',university:'Federal University of Uberlândia',country:'Brazil'},
                {name:'Mingyu Feng', email:'mingyufeng@gmail.com',university:'WestEd',country:'United States'},
                {name:'Carol Forsyth', email:'cforsyth@ets.org',university:'ETS',country:'United States'},
                {name:'Davide Fossati', email:'davide@fossati.us',university:'Emory University',country:'United States'},
                {name:'Reva Freedman', email:'freedman@cs.niu.edu',university:'Northern Illinois University',country:'United States'},
                {name:'Dragan Gasevic', email:'dgasevic@acm.org',university:'Monash University',country:'Australia'},
                {name:'Isabela Gasparini', email:'isagasp@gmail.com',university:'Santa Catarina State University',country:'Brazil'},
                {name:'Elena Gaudioso', email:'elena@dia.uned.es',university:'Universidad Nacional de Educación a Distancia',country:'Spain'},
                {name:'Alex Sandro Gomes', email:'asg@cin.ufpe.br',university:'Federal University of Pernambuco',country:'Brazil'},
                {name:'Monique Grandbastien', email:'monique.grandbastien@loria.fr',university:'LORIA, Universite de Lorraine',country:'France'},
                {name:'Gahgene Gweon', email:'ggweon@gmail.com',university:'Seoul National University',country:'South Korea'},
                {name:'Jason Harley', email:'jharley1@ualberta.ca',university:'University of Alberta',country:'Canada'},
                {name:'Peter Hastings', email:'peterh@cdm.depaul.edu',university:'DePaul University',country:'United States'},
                {name:'Neil Heffernan', email:'nth@wpi.edu',university:'Worcester Polytechnic Institute',country:'United States'},
                {name:'Sharon Hsiao', email:'Sharon.Hsiao@asu.edu',university:'Arizona State University',country:'United States'},
                {name:'Paul Salvador Inventado', email:'pinventado@fullerton.edu',university:'California State University Fullerton',country:'United States'},
                {name:'Seiji Isotani', email:'sisotani@gmail.com',university:'University of São Paulo',country:'Brazil'},
                {name:'Sridhar Iyer', email:'sri@iitb.ac.in',university:'IIT Bombay',country:'India'},
                {name:'Patricia Jaques', email:'patricia.jaques@gmail.com',university:'UNISINOS',country:'Brazil'},
                {name:'Judy Kay', email:'judy.kay@gmail.com',university:'The University of Sydney',country:'Australia'},
                {name:'Fazel Keshtkar', email:'keshtkaf@stjohns.edu',university:'ST John\'s University',country:'United States'},
                {name:'Simon Knight', email:'sjgknight@gmail.com',university:'University of Technology, Sydney',country:'Australia'},
                {name:'Tomoko Kojiri', email:'kojiri@kansai-u.ac.jp',university:'Kansai University',country:'Japan'},
                {name:'Amruth Kumar', email:'amruth@ramapo.edu',university:'Ramapo College of New Jersey',country:'United States'},
                {name:'Rohit Kumar', email:'rohit.kumar@gmail.com',university:'Voice Thesis',country:'United States'},
                {name:'Jean-Marc Labat', email:'jean-marc.labat@lip6.fr',university:'Universit Paris 6',country:'France'},
                {name:'Sébastien Lallé', email:'lalles@cs.ubc.ca',university:'The University of British Columbia',country:'Canada'},
                {name:'Nguyen-Thinh Le', email:'nguyen-thinh.le@hu-berlin.de',university:'Humboldt Universität zu Berlin',country:'Germany'},
                {name:'Blair Lehman', email:'blehman@ets.org',university:'Educational Testing Service',country:'United States'},
                {name:'James Lester', email:'lester@csc.ncsu.edu',university:'North Carolina State University',country:'United States'},
                {name:'Yu Lu', email:'luyu@bnu.edu.cn',university:'Beijing Normal University',country:'China'},
                {name:'Vanda Luengo', email:'vanda.luengo@lip6.fr',university:'LIP6, Sorbonne Université',country:'France'},
                {name:'Collin Lynch', email:'cflynch@ncsu.edu',university:'North Carolina State University',country:'United States'},
                {name:'Roberto Martinez-Maldonado', email:'roberto@martinezmaldonado.net',university:'University of Technology, Sydney',country:'Australia'},
                {name:'Smit Marvaniya', email:'smarvani@in.ibm.com',university:'IBM',country:'India'},
                {name:'Noboru Matsuda', email:'nmazda@gmail.com',university:'North Carolina State University',country:'United States'},
                {name:'Gordon McCalla', email:'mccalla@cs.usask.ca',university:'University of Saskatchewan',country:'Canada'},
                {name:'Agathe Merceron', email:'merceron@beuth-hochschule.de',university:'Beuth University of Applied Sciences Berlin',country:'Germany'},
                {name:'Marcelo Milrad', email:'marcelo.milrad@lnu.se',university:'Linnaeus University',country:'Sweden'},
                {name:'Tanja Mitrovic', email:'tanja.mitrovic@canterbury.ac.nz',university:'University of Canterbury',country:'New Zealand'},
                {name:'Kazuhisa Miwa', email:'miwa@is.nagoya-u.ac.jp',university:'Nagoya University',country:'Japan'},
                {name:'Riichiro Mizoguchi', email:'mizo@jaist.ac.jp',university:'Japan Advanced Institute of Science and Technology',country:'Japan'},
                {name:'Andrew Olney', email:'aolney@memphis.edu',university:'University of Memphis',country:'United States'},
                {name:'Jennifer Olsen', email:'jennifer.olsen@epfl.ch',university:'Ecole Polytechnique Fédérale de Lausanne',country:'Switzerland'},
                {name:'Ranilson Paiva', email:'roap@ic.ufal.br',university:'Federal University of Alagoas',country:'Brazil'},
                {name:'Luc Paquette', email:'luc.paquette@gmail.com',university:'University of Illinois at Urbana-Champaign',country:'United States'},
                {name:'Abelardo Pardo', email:'abelardo.pardo@unisa.edu.au',university:'University of South Australia',country:'Australia'},
                {name:'Zach Pardos', email:'pardos@berkeley.edu',university:'University of California, Berkeley',country:'United States'},
                {name:'Radek Pelánek', email:'xpelanek@fi.muni.cz',university:'Masaryk University Brno',country:'Czechia'},
                {name:'Niels Pinkwart', email:'niels.pinkwart@hu-berlin.de',university:'Humboldt-Universität zu Berlin',country:'Germany'},
                {name:'Elvira Popescu', email:'popescu_elvira@software.ucv.ro',university:'University of Craiova',country:'Romania'},
                {name:'Martina Rau', email:'marau@wisc.edu',university:'University of Wisconsin - Madison',country:'United States'},
                {name:'Ma. Mercedes T. Rodrigo', email:'mrodrigo@ateneo.edu',university:'Ateneo de Manila University',country:'Philippines'},
                {name:'Ido Roll', email:'ido.roll@ubc.ca',university:'The University of British Columbia',country:'Canada'},
                {name:'Jonathan Rowe', email:'jprowe@ncsu.edu',university:'North Carolina State University',country:'United States'},
                {name:'Vasile Rus', email:'vrus@memphis.edu',university:'The University of Memphis',country:'United States'},
                {name:'Demetrios Sampson', email:'sampson@iti.gr',university:'Curtin University',country:'Australia'},
                {name:'Olga C. Santos', email:'ocsantos@dia.uned.es',university:'Universidad Nacional de Educación a Distancia',country:'Spain'},
                {name:'Kazuhisa Seta', email:'seta@mi.s.osakafu-u.ac.jp',university:'Osaka Prefecture University',country:'Japan'},
                {name:'Lei Shi', email:'lei.shi@durham.ac.uk',university:'Durham University',country:'United Kingdom'},
                {name:'Sergey Sosnovsky', email:'sosnovsky@gmail.com',university:'Utrecht University',country:'Netherlands'},
                {name:'Pierre Tchounikine', email:'Pierre.Tchounikine@imag.fr',university:'University of Grenoble',country:'France'},
                {name:'Maomi Ueno', email:'ueno@ai.is.uec.ac.jp',university:'The University of Electro-Communications',country:'Japan'},
                {name:'Felisa Verdejo', email:'felisa@lsi.uned.es',university:'Universidad Nacional de Educación a Distancia',country:'Spain'},
                {name:'Rosa Vicari', email:'rosa@inf.ufrgs.br',university:'Federal University of Rio Grande do Sul',country:'Brazil'},
                {name:'Erin Walker', email:'eawalker@pitt.edu',university:'Arizona State University',country:'United States'},
                {name:'Beverly Park Woolf', email:'bev@cs.umass.edu',university:'University of Massachusetts',country:'United States'},
                {name:'Diego Zapata-Rivera', email:'DZapata@ETS.ORG',university:'Educational Testing Service',country:'United States'},
                {name:'Gustavo Zurita', email:'gzurita@fen.uchile.cl',university:'Universidad de Chile',country:'Chile'},
                {name:'Esma Aimeur', email:'aimeur@iro.umontreal.ca',university:'University of Montreal',country:'Canada'},
                {name:'Patricia Albacete', email:'palbacet@pitt.edu',university:'University of Pittsburgh',country:'United States'},
                {name:'Ivon Arroyo', email:'arroyo.ivon@gmail.com',university:'Worcester Polytechnic Institute',country:'United States'},
                {name:'Nilufar Baghaei', email:'N.Baghaei@massey.ac.nz',university:'Massey University',country:'New Zealand'},
                {name:'Ryan Baker', email:'ryanshaunbaker@googlemail.com',university:'University of Pennsylvania',country:'United States'},
                {name:'Emmanuel Blanchard', email:'ebl@idu-interactive.com',university:'IDÛ Interactive Inc.',country:'Canada'},
                {name:'Nigel Bosch', email:'pnb@illinois.edu',university:'University of Illinois Urbana-Champaign',country:'United States'},
                {name:'Jesus G. Boticario', email:'jgb@dia.uned.es',university:'Universidad Nacional de Educación a Distancia',country:'Spain'},
                {name:'Kristy Elizabeth Boyer', email:'keboyer@ufl.edu',university:'University of Florida',country:'United States'},
                {name:'Bert Bredeweg', email:'B.Bredeweg@uva.nl',university:'University of Amsterdam',country:'Netherlands'},
                {name:'Christopher Brooks', email:'brooksch@umich.edu',university:'University of Michigan',country:'United States'},
                {name:'Geiser Chalco Challco', email:'geiser.gcc@gmail.com',university:'University of Sao Paulo',country:'Brazil'},
                {name:'Mohamed Amine Chatti', email:'mohamed.chatti@uni-due.de',university:'University of Duisburg-Essen',country:'Germany'},
                {name:'Min Chi', email:'min.chi@gmail.com',university:'North Carolina State University',country:'United States'},
                {name:'Andrew Clayphan', email:'clayphan@gmail.com',university:'The University of Sydney',country:'Australia'},
                {name:'Mark G. Core', email:'core@ict.usc.edu',university:'University of Southern California',country:'United States'},
                {name:'Diego Dermeval', email:'diegodermeval@gmail.com',university:'Federal University of Alagoas',country:'Brazil'},
                {name:'Tejas Dhamecha', email:'tidhamecha@in.ibm.com',university:'IBM',country:'India'},
                {name:'Barbara Di Eugenio', email:'bdieugen@uic.edu',university:'University of Illinois at Chicago',country:'United States'},
                {name:'Daniele Di Mitri', email:'Daniele.Dimitri@ou.nl',university:'Open University',country:'Netherlands'},

                {name:'Rafeal Ferreira', email:'rafaelfmelo@gmail.com',university:'University of Pernambuco',country:'Brazil'},
                {name:'Rafael Dias de Araújo', email:'rafael.araujo@ufu.br',university:'Federal University of Uberlandia',country:'Brazil'},
                {name:'Solomon Sunday Oyelere', email:'solomon.oyelere@uef.fi',university:'University of Eastern Finland',country:'Finland'},
                {name:'Emmanuel Awuni Kolog', email:'eakolog@ug.edu.gh',university:'University of Ghana',country:'Ghana'},
                {name:'Mohamed Abdelgalil Saqr', email:'saqr@saqr.me',university:'University of Eastern Finland',country:'Finland'},
                {name:'Sean Siqueira', email:'sean@uniriotec.br',university:'Unirio',country:'Brazil'},
                {name:'Filippo Sciarrone', email:'sciarro@ing.uniroma3.it',university:'Roma Tre University',country:'Italy'},

                {name:'Maiga Chang', email:'maiga.chang@gmail.com',university:'Athabascau University',country:'Canada'},
            ]
        }
    },
    mounted () {
        this.members.sort((a,b) => (a.name > b.name) ? 1 : -1)
    }
}
</script>