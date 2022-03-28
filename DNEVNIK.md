# Evidencija aktivnosti

##20.01.2021.
Pocetak | Kraj
------- | ----
15:00   | 15:30
### Kratki opis promjena
Definirani zahtjevi aplikacije.
Dovršena prva faza projekta.

## 22.01.2021.
Pocetak | Kraj
------- | ----
hh:mm   | hh:mm
### Kratki opis promjena
Definiran prototip izgleda ekrana i funcionalnosti.
Na konzultacijama predstavljena ideja prototipa profesoru.

## 13.08.2021.
Pocetak | Kraj
------- | ----
20:00   | 02:00
### Kratki opis promjena
Pocetak izrade aplikacije.
Za pocetak su napravljeni 3 ekrana: glavni ekran, ekran za pojedinu vjezbu i ekran za filtriranje. Pocetak rada navigacije. Napravljena stack navigacija izmedu glavnih ekrana. Dodani su podaci o vjezbama koji ce se koristiti kao podaci na ekranima. Napravljena je za te podatke.

## 14.08.2021.
Pocetak | Kraj
------- | ----
20:00   | 01:00
### Kratki opis promjena
Napravljene su komponente koje sluze za prikaz podataka na ekranima. Komponenta ExerciseWindow sluzi za prikaz podaka na ekranu Exercise, komponenta GridSection.js sluzi za prikaz podataka u flatlistu na glavnom ekranu.

## 17.08.2021.
Pocetak | Kraj
------- | ----
10:00   | 14:00
### Kratki opis promjena
S obzirom da se pojavila ideja za mogucnosti da se pojedine vjezbe dodaju u nekakvu vrstu treninga kojega korisnik moze odraditi, napravljen je dodatni ekran TrainingExe.js koji sluzi za prikaz tih oznacenih vjezbi. Korisnik vjezbe oznacava pritiskom ikone zvijezdice na ekranima pojedinih vjezbi. Te ikone se nalaze u header dijelu ekrana. Za oblikovanje tih botuna u header dijelu napravljena je komponenta HeaderBtn.js koja se koristi na svim ekranima gdje dodajemo ikone u header dio. Posto smo dodali novi ekran morali smo i napraviti nacin da pristupimo njemu. Za pristup tom ekranu koristen je tab navigation na glavnom ekranu. Osim tab navigationa dodan je i drawer navigation koji sluzi za navigaciju izmedu glavnog ekrana i ekrana za filtere. Dodan je dizajn na glavni ekran i ekran za prikaz vjezbi.

## 17.08.2021.
Pocetak | Kraj
------- | ----
22:00   | 03:00
### Kratki opis promjena
Postavljena je stack navigacija i na taj ekran jer korsnik moze pogledati pojedine vjezbe koje se nalaze na tom ekranu. Osim tab navigationa dodan je i drawer navigation koji sluzi za navigaciju izmedu glavnog ekrana i ekrana za filtere. Ureden je izgled botuna za pojedine kategorije filtera. Dodan je dizajn na glavni ekran i ekran za prikaz vjezbi.

## 18.08.2021.
Pocetak | Kraj
------- | ----
10:00   | 15:00
### Kratki opis promjena
Napravljen je store, odnosno akcije i reduceri koji omogucuju funkionalnost postavljanja filtera i odabira vjezbi za trening. Izmjenjena je klasa za vjezbe te su joj dodana svojstva za prikaz filtera, odnosno za koji dio tijela je namjenjena pojedina vjezba. Dosadasnja klasa nije imala bool vrijednosti koje se koriste pri filtriranju vjezbi.

## 18.08.2021.
Pocetak | Kraj
------- | ----
20:00   | 03:00
### Kratki opis promjena
 Nakon izmjene klase i dodavanja dodatnih boolean vrijednosti u podatke napravljena je mogućnost filtriranja. Filtiranje je napravljeno na dva nacina prvi je da je dovoljno da se jedan od trazenih filtera nalazi u vjezbi, a drugi je da tocno svi ukljuceni filteri odgovaraju filterima u vjezbi. U aplikaciji je ostavljen prvi nacin jer je imao vise smisla.
Dodana je funkcionalnost spremanja pojedinih vjezbi za odraditi. To se radi pomocu pritiska tipke zvijezdice koja se nalazi u headeru ekrana. Pokraj nje je dodana tipka za otvaranje kamere. Nakon sto smo dobili podatke koje mozemo koristiti na ekanu za trening uredili smo taj ekran na slican nacin kao i pocetni ekran, da nam prikazuje vjezbe koje mu posaljemo u nizu koji je spremljen u storeu.

## 19.08.2021.
Pocetak | Kraj
------- | ----
14:00   | 18:00
### Kratki opis promjena
qol izmjene
Dodana je funkcija da prilikom spremanja filtera se koristik automatski vrati na pocetnih ekran. U header ekrana za filtriranje je dodan botun koji resetira sve filtere na pocetnu vrijednost. Dodani su ispisi za ekrane na kojima se trenutno ne prikazuju nikakvi podaci. Ureden je dizajn aplikacije. Uredene su komponente da izgledaju jednako na svim ekranima. Postavljene su boje kao konstante koje se koristi u dizajnu. Dodane se slike koje su pozadine na ekranima. Dodan je novi font i uređeno učitavanje fontova koje nije radilo. Postavljen isti font u svim komponentama.

## 21.08.2021.
Pocetak | Kraj
------- | ----
20:00   | 22:00
### Kratki opis promjena
Dodana funkcionalnost slikavanja slike kojoj se pristupa klikom na ikonu kamere u header dijelu pojedine vjezbe. Nakon slikavanja slika se prikazuje ispod slike same vjezbe.