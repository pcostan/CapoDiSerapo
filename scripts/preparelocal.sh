################################################################################
# Shell and drush commands to prepare the local installation
#
# Go to sites/default/scripts and type "sh preparelocal.sh"
# in your console/shell/Terminal.
#
################################################################################

# Change directory to drupal root
cd ../

# Check drupal status
drush status

# Enable dev modules.
# drush en jnl_bmj_toolbox -y
# drush en dblog -y
# drush en devel -y
# drush en field_ui -y
# drush en highwire_dev -y
# drush en highwire_log -y
# drush en migrate_ui -y
# drush en rules_admin -y
# drush en stage_file_proxy -y
# drush en views_ui -y
# drush en module_filter -y
# drush dis cdn -y

# Disable caching and aggregation
drush vset preprocess_css 0 -y
drush vset preprocess_js 0 -y
drush vset cache 0 -y
drush vset cache_lifetime 0 -y
drush vset page_cache_maximum_age 0 -y

# Clear all caches.
drush cc all

# Display list of features to check status manually.
drush features
