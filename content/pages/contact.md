---
title: Contacto
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: Contacto
    content: >-
     Déjanos saber que tipo de residuos aprovechables deseas suministrar y muy pronto pasaremos a recogerlos.
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Nombre
        is_required: true
      - input_type: email
        name: email
        label: Correo electrónico
        is_required: true
      - input_type: text
        name: address
        label: Dirección
        is_required: true
      - input_type: text
        name: wasteSubtitle
        label: Selecciona el tipo de residuo que posees
      - input_type: checkbox
        name: paper
        label: Papel
      - input_type: checkbox
        name: glass
        label: Vidrio
      - input_type: checkbox
        name: metal
        label: Metal
      - input_type: checkbox
        name: plastico
        label: Plástico
      - input_type: textarea
        name: message
        label: Observaciones
      - input_type: checkbox
        name: consent
        label: >-
          Estoy de acuerdo con la política de tratamiento de datos personales.
        is_required: true
    submit_label: Enviar
seo:
  title: Contacto
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contacto
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: landing
---
