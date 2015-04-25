<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces;?>>
<head profile="<?php print $grddl_profile; ?>">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Capo di Serapo - The first unique Serapea online collection will be for sale in May!">
  <meta name="keywords" content="Serapea, Serapo, Capo, Cape, Scarf, Men-scarf, Women-scarf, Fashion, Serapeum, Serapis-Hellenic, Cajeta, Silk, Serapis, greek-mythology-fashion, Italian-fashion, North-African-fashion, Head-scarf, Head-garment, Hand-made-scarves, Exclusive-scarves" />
  <meta name="author" content="Paul Costan & Bakul Miah">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <!-- HTML5 element support for IE6-8 -->
  <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
