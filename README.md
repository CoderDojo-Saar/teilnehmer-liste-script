# CoderDojo Teilnehmer Liste

## Motivation

Für Mailchimp müssen wir zum versenden der Campagnen die Teilnehmer in ein Cluster mittels Tag abspeichern.

Dies bedeutet derzeit sehr viel händische Arbeit. Hier soll das Node Script helfen.

## Benutzung

```
    node script.js <CSV Datei> <Nummer des coderdojos>
```

Heraus bekommt man alle E-Mail Adressen aus der Adressspalte der CSV. Zudem wird eine *mailchimp.csv* erstellt welche dem benötigten Mailchimp Format für einen Datenimport entspricht. Somit kann diese CSV für einen Import benutzt werden.
