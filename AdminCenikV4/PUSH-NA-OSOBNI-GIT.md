# Push pouze na tvůj osobní GitHub (solinpetr-jpg)

**Cíl:** Nahrát kód na větev `UI-design-+-prototyp-petr-(osobní)` v repozitáři  
**https://github.com/solinpetr-jpg/AdminCenikV4**

Na Coweo se nic neposílá – používá se jen remote **origin** (tvůj osobní repo).

---

## 1. Otevři terminál v tomto projektu

V Cursoru: **Terminal → New Terminal**, nebo otevři terminál a přejdi do složky projektu:

```bash
cd "/Users/petr/Documents/GitHub/Cursor Repos/Admin Cenik 4/AdminCenikV4"
```

---

## 2. Push na tvůj osobní GitHub

Zkopíruj a vlož (jeden řádek):

```bash
git push origin "UI-design-+-prototyp-petr:UI-design-+-prototyp-petr-(osobní)"
```

Význam:  
- **origin** = tvůj repo (solinpetr-jpg/AdminCenikV4)  
- **UI-design-+-prototyp-petr** = tvoje lokální větev  
- **UI-design-+-prototyp-petr-(osobní)** = větev na GitHubu, kam se to nahraje  

Na **coweotech** se nic neposílá.

---

## 3. Přihlášení

Když Git vyžaduje přihlášení:

- **Username:** tvůj GitHub login (solinpetr-jpg)
- **Password:** použij **Personal Access Token** (ne heslo k účtu)  
  - GitHub → Settings → Developer settings → Personal access tokens → Generate new token (scope `repo`)

---

## 4. (Volitelně) Nastavit, aby větev sledovala jen origin

Až push proběhne, můžeš nastavit, že tato větev má „výchozí“ remote jen tvůj osobní repo (pak při budoucím `git push` půjde vždy jen na origin):

```bash
git branch --set-upstream-to=origin/UI-design-+-prototyp-petr-(osobní) UI-design-+-prototyp-petr
```

Potom stačí psát jen `git push` a půjde to na solinpetr-jpg, ne na Coweo.
